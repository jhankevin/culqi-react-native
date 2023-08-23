# Paquete npm `culqi-react-native`

El paquete `culqi-react-native` proporciona un componente React Native para integrar fácilmente un formulario de tarjeta de crédito compatible con Culqi en tu aplicación.

## Instalación

Instala el paquete utilizando npm o yarn:

``npm install culqi-react-native``

``yarn add culqi-react-native``


## Ejemplo

```javascript

import React from 'react';
import { View, StyleSheet } from 'react-native';
import CulqiForm from 'culqi-react-native';

const MyScreen = () => {
  const culqiKey = 'tu_clave_de_api_de_culqi';

  const handleSubmit = (data) => {
    // Realiza la lógica de envío de datos a Culqi o donde sea necesario
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <CulqiForm
        culqiKey={culqiKey}
        onChangeData={handleSubmit}
        buttonText="Guardar tarjeta"
        buttonStyles={styles.customButton}
        inputStyles={styles.customInput}
      />
    </View>
  );
};


export default MyScreen;
```

## Props
El componente CulqiForm acepta las siguientes props:

- ´culqiKey´ (string, requerido): La clave de API proporcionada por Culqi para realizar solicitudes.

- ´onChangeData´ (función): Un callback que se llama cuando se recibe un token de Culqi después de una solicitud exitosa.

- ´buttonText´ (string, opcional): El texto que se mostrará en el botón de envío del formulario (por defecto es "Guardar tarjeta").

- ´buttonStyles´ (objeto de estilos, opcional): Estilos personalizados para el botón de envío.

- ´inputStyles´ (objeto de estilos, opcional): Estilos personalizados para los campos de entrada.

- ´brandColor´ (string, opcional): El color de marca que se utilizará para resaltar elementos en el formulario (por defecto es "#0066FF").


## Notas
Este componente está diseñado para funcionar con la pasarela de pago Culqi. Asegúrate de proporcionar la clave de API correcta y de implementar la lógica de manejo de tokens según tus necesidades.
