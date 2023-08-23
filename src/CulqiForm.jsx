import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Input from "./Input";
import axios from "axios";
import { useState } from "react";
import CardType from "./CardType";
import creditCardType from "credit-card-type";

const validationSchema = Yup.object().shape({
  cardNumber: Yup.string()
    .required("El número de tarjeta es obligatorio")
    .min(13, "El número de tarjeta está incompleto"),
  expiryDate: Yup.string()
    .required("La fecha de expiración es obligatoria")
    .test(
      "len",
      "La fecha de expiración está incompleta",
      (val) => val && val.length === 6
    ),
  cvv: Yup.string()
    .required("El código de seguridad es obligatorio")
    .min(3, "Código de seguridad incompleto"),
  email: Yup.string()
    .required("El correo electrónico es obligatorio")
    .email("Ingresa un correo electrónico válido"),
});

const CulqiForm = ({
  culqiKey,
  onChangeData = () => {},
  buttonStyles,
  inputStyles,
  brandColor = "#0066FF",
  buttonText = "Guardar tarjeta",
}) => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ mode: "all", resolver: yupResolver(validationSchema) });

  const onSubmit = async (data) => {
    setLoading(true);
    setErrorMessage(null);
    const { month, year } = extractDateAndYear(data.expiryDate);
    const cardData = {
      card_number: data.cardNumber,
      cvv: data.cvv,
      expiration_month: month,
      expiration_year: year,
      email: data.email,
    };
    try {
      const response = await axios.post(
        "https://secure.culqi.com/v2/tokens",
        cardData,
        {
          headers: {
            Authorization: `Bearer ${culqiKey}`,
          },
        }
      );

      if (response?.data?.object === "token") {
        onChangeData(response?.data);
      } else {
        onchange(null);
      }
    } catch (error) {
      if (error?.response?.data?.object === "error") {
        setErrorMessage(error?.response?.data?.user_message);
      } else {
        setErrorMessage(
          "Ocurrió un error, vuelve a intentarlo o comunicate con soporte"
        );
      }
    } finally {
      setLoading(false);
    }
  };

  const extractDateAndYear = (dateString) => {
    if (dateString.length !== 6) {
      return null; // El formato no es válido
    }
    const month = dateString.substr(0, 2);
    const year = dateString.substr(2, 4);
    return {
      month,
      year,
    };
  };

  const getCardType = (cardNumber) => {
    if (cardNumber !== "") {
      const types = creditCardType(cardNumber);
      if (types?.length > 0) {
        return types[0].type;
      }
    }

    return null;
  };

  const getCardMask = (cardNumber) => {
    const cardType = getCardType(cardNumber);
    if (cardType === "visa" || cardType === "mastercard") {
      return "9999 9999 9999 9999"; // Máscara para tarjetas de 16 dígitos
    } else if (cardType === "american-express") {
      return "9999 999999 99999"; // Máscara para tarjetas de 15 dígitos
    } else if (cardType === "diners-club") {
      return "9999 999999 9999"; // Máscara para tarjetas de 14 dígitos
    }
    // Máscara por defecto
    return "9999 9999 9999 9999";
  };

  return (
    <View>
      {errorMessage !== null ? (
        <View style={styles.errorMessage}>
          <Text style={styles.errorMessageText}>{errorMessage}</Text>
        </View>
      ) : null}
      <View style={{ marginBottom: 40 }}>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Número de tarjeta</Text>

          <Controller
            control={control}
            name="cardNumber"
            render={({ field: { onChange, onBlur, value } }) => (
              <View>
                <View>
                  <Input
                    mask={getCardMask(value)}
                    placeholder="1234 1234 1234 1234"
                    value={value}
                    onBlur={onBlur}
                    onChangeText={(text, rawText) => onChange(rawText)}
                    placeholderTextColor="#858A91"
                    brandColor={brandColor}
                    style={inputStyles}
                    keyboardType="numeric"
                  />
                  <View style={styles.cardTypeLogo}>
                    <CardType type={getCardType(value)} />
                  </View>
                </View>
                {errors.cardNumber && (
                  <Text style={styles.textError}>
                    {errors.cardNumber.message}
                  </Text>
                )}
              </View>
            )}
          />
        </View>
        <View style={{ flexDirection: "row", marginBottom: 24 }}>
          <View style={{ flex: 1, marginRight: 8 }}>
            <Text style={styles.label}>Expiración</Text>
            <Controller
              control={control}
              name="expiryDate"
              defaultValue=""
              render={({ field: { onChange, onBlur, value } }) => (
                <View>
                  <Input
                    mask="99 / 9999"
                    placeholder="MM/YYYY"
                    placeholderTextColor="#858A91"
                    brandColor={brandColor}
                    style={inputStyles}
                    keyboardType="numeric"
                    value={value}
                    onBlur={onBlur}
                    onChangeText={(text, rawText) => onChange(rawText)}
                  />
                  {errors.expiryDate && (
                    <Text style={styles.textError}>
                      {errors.expiryDate.message}
                    </Text>
                  )}
                </View>
              )}
            />
          </View>
          <View style={{ flex: 1, marginLeft: 8 }}>
            <Text style={styles.label}>CVV</Text>
            <Controller
              control={control}
              name="cvv"
              defaultValue=""
              render={({ field: { onChange, onBlur, value } }) => (
                <View>
                  <Input
                    mask="9999"
                    placeholder="123"
                    placeholderTextColor="#858A91"
                    style={inputStyles}
                    brandColor={brandColor}
                    keyboardType="numeric"
                    value={value}
                    onBlur={onBlur}
                    onChangeText={(text, rawText) => onChange(rawText)}
                  />
                  {errors.cvv && (
                    <Text style={styles.textError}>{errors.cvv.message}</Text>
                  )}
                </View>
              )}
            />
          </View>
        </View>
        <View>
          <Text style={styles.label}>Correo electrónico</Text>
          <Controller
            control={control}
            name="email"
            defaultValue=""
            render={({ field: { onChange, onBlur, value } }) => (
              <View>
                <Input
                  onBlur={onBlur}
                  brandColor={brandColor}
                  style={inputStyles}
                  onChangeText={(text) => onChange(text.toLowerCase())}
                  value={value}
                />
                {errors.email && (
                  <Text style={styles.textError}>{errors.email.message}</Text>
                )}
              </View>
            )}
          />
        </View>
      </View>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: brandColor }, buttonStyles]}
        onPress={handleSubmit(onSubmit)}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="white" size="small" />
        ) : (
          <Text style={styles.buttonText}>{buttonText}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default CulqiForm;

const styles = StyleSheet.create({
  label: {
    fontSize: 15,
    color: "#313236",
    marginBottom: 8,
  },
  formGroup: {
    marginBottom: 16,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
    height: 48,
    backgroundColor: "#0066FF",
    borderRadius: 8,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "800",
  },
  textError: {
    color: "red",
    fontSize: 12,
    marginTop: 4,
  },
  errorMessage: {
    padding: 12,
    borderColor: "#FFCDCD",
    borderWidth: 1,
    backgroundColor: "#FFF2F2",
    borderRadius: 8,
    marginBottom: 16,
  },
  errorMessageText: {
    fontSize: 14,
    color: "#E50000",
  },
  cardTypeLogo: {
    position: "absolute",
    right: 16,
    top: 13,
  },
});
