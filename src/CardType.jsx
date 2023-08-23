import Svg, { Rect, Path } from "react-native-svg";

const size = {
  width: 34,
  height: 23,
};

const CardType = ({ type }) => {
  switch (type) {
    case "visa":
      return <Visa />;
    case "mastercard":
      return <MasterCard />;
    case "american-express":
      return <Amex />;
    case "diners-club":
      return <DinersClub />;
    // Agrega más casos para otros tipos de tarjetas si es necesario
    default:
      return <CardDefault />;
  }
};

export default CardType;

const Visa = () => {
  return (
    <Svg
      width={size.width}
      height={size.height}
      viewBox="0 0 31 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Rect
        x={0.809628}
        y={0.238095}
        width={29.5238}
        height={19.5238}
        rx={1.7619}
        fill="white"
      />
      <Path
        d="M20.8831 6.55844C20.5136 6.41185 19.9276 6.25 19.2029 6.25C17.353 6.25 16.0503 7.23648 16.0423 8.64685C16.027 9.68742 16.975 10.2654 17.6841 10.6123C18.4088 10.9669 18.6552 11.1983 18.6552 11.5143C18.6478 11.9997 18.0696 12.2234 17.5302 12.2234C16.7823 12.2234 16.3816 12.108 15.7726 11.838L15.5259 11.7223L15.2638 13.3486C15.7031 13.5487 16.5126 13.7264 17.353 13.7341C19.3186 13.7341 20.5983 12.7629 20.6134 11.2599C20.6209 10.4352 20.1203 9.80328 19.041 9.28689C18.3858 8.95539 17.9845 8.73187 17.9845 8.3927C17.9922 8.08436 18.3239 7.76855 19.0635 7.76855C19.6725 7.75308 20.12 7.89946 20.4589 8.04595L20.6284 8.12288L20.8831 6.55844Z"
        fill="#3362AB"
      />
      <Path
        d="M14.0923 13.6262H12.219L13.3907 6.38133H15.2639L14.0923 13.6262Z"
        fill="#3362AB"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.6852 6.38133H24.2362C23.7894 6.38133 23.4499 6.51224 23.2571 6.98243L20.4746 13.6261H22.4402C22.4402 13.6261 22.7638 12.7319 22.8333 12.5393H25.2385C25.2923 12.7937 25.462 13.6261 25.462 13.6261H27.1965L25.6852 6.38133ZM23.3729 11.0596C23.5272 10.6434 24.1208 9.03253 24.1208 9.03253C24.1177 9.03873 24.1418 8.9718 24.1778 8.87201L24.1782 8.87079L24.1785 8.86999C24.2323 8.72092 24.3121 8.49966 24.3673 8.33892L24.4982 8.96318C24.4982 8.96318 24.8529 10.6974 24.9299 11.0596H23.3729Z"
        fill="#3362AB"
      />
      <Path
        d="M10.6544 6.38133L8.81982 11.3216L8.61934 10.3197L8.61916 10.319L7.96415 6.99032C7.85628 6.52761 7.52479 6.39659 7.11627 6.38133H4.10234L4.0715 6.52771C4.80659 6.71569 5.46406 6.98656 6.04014 7.32336L7.7098 13.6185H9.69075L12.6352 6.38133H10.6544Z"
        fill="#3362AB"
      />
      <Rect
        x={0.809628}
        y={0.238095}
        width={29.5238}
        height={19.5238}
        rx={1.7619}
        stroke="#CCCCCC"
        strokeWidth={0.47619}
      />
    </Svg>
  );
};

const MasterCard = () => {
  return (
    <Svg
      width={size.width}
      height={size.height}
      viewBox="0 0 31 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Rect
        x={0.666745}
        y={0.238095}
        width={29.5238}
        height={19.5238}
        rx={1.7619}
        fill="white"
      />
      <Path
        d="M25.4287 9.93029C25.4287 13.3466 22.6648 16.1106 19.2485 16.1106C17.8064 16.1106 16.4845 15.6127 15.4373 14.7887C16.8794 13.6556 17.7893 11.9045 17.7893 9.93029C17.7893 7.95604 16.8622 6.20497 15.4373 5.07192C16.4845 4.24789 17.8064 3.75003 19.2485 3.75003C22.6648 3.75003 25.4287 6.53115 25.4287 9.93029Z"
        fill="#F79E1B"
      />
      <Path
        d="M15.4373 5.07192C15.4373 5.07192 15.4373 5.07192 15.4373 5.07192C16.8622 6.20497 17.7893 7.95604 17.7893 9.93029C17.7893 11.9045 16.8794 13.6556 15.4373 14.7887L15.4201 14.7887C13.9952 13.6728 13.0682 11.9046 13.0682 9.93033C13.0682 7.95608 13.9953 6.20501 15.4201 5.07196C15.4201 5.07195 15.4202 5.07197 15.4201 5.07196L15.4373 5.07192Z"
        fill="#FF5F00"
      />
      <Path
        d="M13.0682 9.93033C13.0682 7.95608 13.9953 6.20501 15.4201 5.07196C14.3729 4.24792 13.0511 3.75006 11.609 3.75006C8.19269 3.75006 5.42874 6.51401 5.42874 9.93032C5.42874 13.3466 8.19269 16.1106 11.609 16.1106C13.0511 16.1106 14.3729 15.6127 15.4201 14.7887C13.9952 13.6728 13.0682 11.9046 13.0682 9.93033Z"
        fill="#EB001B"
      />
      <Rect
        x={0.666745}
        y={0.238095}
        width={29.5238}
        height={19.5238}
        rx={1.7619}
        stroke="#CCCCCC"
        strokeWidth={0.47619}
      />
    </Svg>
  );
};

const Amex = () => {
  return (
    <Svg
      width={size.width}
      height={size.height}
      viewBox="0 0 31 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Rect
        x={0.380979}
        y={0.238095}
        width={29.5238}
        height={19.5238}
        rx={1.7619}
        fill="white"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.87717 7L3.14282 13.051H6.41622L6.82203 12.0862H7.74961L8.15542 13.051H11.7585V12.3147L12.0796 13.051H13.9434L14.2644 12.2991V13.051H21.7579L22.6691 12.1113L23.5222 13.051L27.371 13.0588L24.628 10.0424L27.371 7H23.5819L22.695 7.92237L21.8686 7H13.7167L13.0167 8.56182L12.3003 7H9.03375V7.7113L8.67036 7H5.87717ZM17.0671 7.85926H21.3702L22.6863 9.28091L24.0449 7.85926H25.361L23.3613 10.0416L25.361 12.1987H23.9852L22.6691 10.7605L21.3036 12.1987H17.0671V7.85926ZM18.1298 9.5509V8.7575H20.8148L21.9863 10.0251L20.7628 11.2997H18.1298V10.4344H20.4773V9.5509H18.1298ZM6.51056 7.85926H8.10617L9.91986 11.9625V7.85926H11.6678L13.0687 10.8013L14.3597 7.85926H16.0989V12.2013H15.0406L15.032 8.7989L13.4892 12.2013H12.5425L10.991 8.7989V12.2013H8.81395L8.40122 11.2279H6.17138L5.7595 12.2004H4.59304L6.51056 7.85926ZM6.55212 10.328L7.28677 8.5939L8.02056 10.328H6.55212Z"
        fill="#1F72CD"
      />
      <Rect
        x={0.380979}
        y={0.238095}
        width={29.5238}
        height={19.5238}
        rx={1.7619}
        stroke="#CCCCCC"
        strokeWidth={0.47619}
      />
    </Svg>
  );
};

const DinersClub = () => {
  return (
    <Svg
      width={size.width}
      height={size.height}
      viewBox="0 0 31 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Rect
        x={0.523892}
        y={0.238095}
        width={29.5238}
        height={19.5238}
        rx={1.7619}
        fill="white"
      />
      <Path
        d="M16.5557 16.4914C20.0743 16.5084 23.2859 13.5955 23.2859 10.0519C23.2859 6.17718 20.0743 3.49855 16.5557 3.5H13.5274C9.9669 3.49855 7.03589 6.1779 7.03589 10.0519C7.03589 13.5962 9.9669 16.5084 13.5274 16.4914H16.5557Z"
        fill="#0079BE"
      />
      <Path
        d="M13.5419 4.03695C10.288 4.03803 7.65169 6.6993 7.6506 9.98394C7.65169 13.2682 10.288 15.9295 13.5419 15.9306C16.7962 15.9295 19.4336 13.2682 19.4339 9.98394C19.4336 6.6993 16.7965 4.03803 13.5419 4.03695ZM9.80782 9.98394C9.80714 9.2245 10.0356 8.48252 10.4633 7.85497C10.891 7.22742 11.498 6.74349 12.2051 6.46644V13.5011C11.498 13.2242 10.8908 12.7404 10.4631 12.1129C10.0354 11.4853 9.80701 10.7434 9.80782 9.98394ZM14.8783 13.5025V6.46607C15.586 6.74274 16.1935 7.22662 16.6216 7.85438C17.0496 8.48214 17.278 9.22451 17.2771 9.9843C17.2779 10.744 17.0494 11.4864 16.6214 12.1141C16.1934 12.7418 15.5859 13.2257 14.8783 13.5025Z"
        fill="white"
      />
      <Rect
        x={0.523892}
        y={0.238095}
        width={29.5238}
        height={19.5238}
        rx={1.7619}
        stroke="#CCCCCC"
        strokeWidth={0.47619}
      />
    </Svg>
  );
};

const ApplePay = () => {
  return (
    <Svg
      width={size.width}
      height={size.height}
      viewBox="0 0 30 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Rect
        x={0.238095}
        y={0.238095}
        width={29.5238}
        height={19.5238}
        rx={1.7619}
        fill="white"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.29408 7.36402C7.68656 7.39713 8.07905 7.16537 8.32435 6.87154C8.56556 6.56943 8.72501 6.16385 8.68413 5.75C8.33661 5.76655 7.90733 5.98176 7.66203 6.28387C7.43717 6.54459 7.24502 6.96672 7.29408 7.36402ZM11.963 12.6944V6.24248H14.3547C15.5894 6.24248 16.452 7.10329 16.452 8.3614C16.452 9.61951 15.573 10.4886 14.322 10.4886H12.9524V12.6944H11.963ZM8.68001 7.44265C8.33424 7.4225 8.01874 7.54791 7.7639 7.6492C7.5999 7.71439 7.46103 7.76959 7.35538 7.76959C7.23681 7.76959 7.0922 7.71144 6.92984 7.64615C6.7171 7.56059 6.47387 7.46278 6.21881 7.46748C5.63417 7.47575 5.09042 7.81097 4.79196 8.34484C4.17871 9.41258 4.63252 10.9935 5.22533 11.8626C5.51561 12.293 5.86312 12.7648 6.32102 12.7482C6.52246 12.7405 6.66737 12.6783 6.81734 12.6139C6.99 12.5397 7.16935 12.4627 7.44941 12.4627C7.71975 12.4627 7.89127 12.5377 8.05591 12.6097C8.21246 12.6782 8.3628 12.744 8.58598 12.7399C9.06023 12.7317 9.35868 12.3095 9.64895 11.8791C9.96221 11.4172 10.0999 10.9664 10.1208 10.8979C10.1219 10.894 10.1228 10.8914 10.1232 10.89C10.1227 10.8895 10.1188 10.8877 10.112 10.8846C10.0073 10.836 9.20691 10.4651 9.19923 9.47052C9.19152 8.63568 9.83407 8.21271 9.93522 8.14612C9.94137 8.14208 9.94553 8.13934 9.9474 8.13792C9.53857 7.52542 8.90078 7.4592 8.68001 7.44265ZM18.2592 12.7441C18.8806 12.7441 19.457 12.4254 19.7187 11.9205H19.7391V12.6944H20.6549V9.48294C20.6549 8.55177 19.919 7.95169 18.7866 7.95169C17.7358 7.95169 16.959 8.56005 16.9304 9.39603H17.8217C17.8953 8.99873 18.2592 8.738 18.7579 8.738C19.363 8.738 19.7023 9.02356 19.7023 9.54915V9.90506L18.4677 9.97956C17.3188 10.0499 16.6974 10.5258 16.6974 11.3535C16.6974 12.1895 17.3393 12.7441 18.2592 12.7441ZM18.5248 11.9785C17.9974 11.9785 17.6622 11.7219 17.6622 11.3287C17.6622 10.9231 17.9852 10.6872 18.6025 10.65L19.7023 10.5796V10.9438C19.7023 11.5481 19.1953 11.9785 18.5248 11.9785ZM23.6926 12.9469C23.296 14.0767 22.8422 14.4492 21.8773 14.4492C21.8037 14.4492 21.5584 14.4409 21.5012 14.4243V13.6504C21.5625 13.6587 21.7138 13.667 21.7915 13.667C22.2289 13.667 22.4742 13.4807 22.6255 12.9965L22.7154 12.711L21.0392 8.01377H22.0736L23.2388 11.8253H23.2592L24.4244 8.01377H25.4301L23.6926 12.9469ZM12.9523 7.08674H14.093C14.9515 7.08674 15.4421 7.55025 15.4421 8.36554C15.4421 9.18082 14.9515 9.64848 14.0889 9.64848H12.9523V7.08674Z"
        fill="black"
      />
      <Rect
        x={0.238095}
        y={0.238095}
        width={29.5238}
        height={19.5238}
        rx={1.7619}
        stroke="#CCCCCC"
        strokeWidth={0.47619}
      />
    </Svg>
  );
};

const CardDefault = () => {
  return (
    <Svg
      width={size.width}
      height={size.height}
      viewBox="0 0 30 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Rect
        x={0.238095}
        y={0.238095}
        width={29.5238}
        height={19.5238}
        rx={1.7619}
        fill="white"
      />
      <Path
        d="M11 12H13.4C13.6122 12 13.8157 11.9157 13.9657 11.7657C14.1157 11.6157 14.2 11.4122 14.2 11.2C14.2 10.9878 14.1157 10.7843 13.9657 10.6343C13.8157 10.4843 13.6122 10.4 13.4 10.4H11C10.7878 10.4 10.5843 10.4843 10.4343 10.6343C10.2843 10.7843 10.2 10.9878 10.2 11.2C10.2 11.4122 10.2843 11.6157 10.4343 11.7657C10.5843 11.9157 10.7878 12 11 12ZM20.6 4H9.4C8.76348 4 8.15303 4.25286 7.70294 4.70294C7.25286 5.15303 7 5.76348 7 6.4V13.6C7 14.2365 7.25286 14.847 7.70294 15.2971C8.15303 15.7471 8.76348 16 9.4 16H20.6C21.2365 16 21.847 15.7471 22.2971 15.2971C22.7471 14.847 23 14.2365 23 13.6V6.4C23 5.76348 22.7471 5.15303 22.2971 4.70294C21.847 4.25286 21.2365 4 20.6 4ZM21.4 13.6C21.4 13.8122 21.3157 14.0157 21.1657 14.1657C21.0157 14.3157 20.8122 14.4 20.6 14.4H9.4C9.18783 14.4 8.98434 14.3157 8.83431 14.1657C8.68429 14.0157 8.6 13.8122 8.6 13.6V8.8H21.4V13.6ZM21.4 7.2H8.6V6.4C8.6 6.18783 8.68429 5.98434 8.83431 5.83431C8.98434 5.68429 9.18783 5.6 9.4 5.6H20.6C20.8122 5.6 21.0157 5.68429 21.1657 5.83431C21.3157 5.98434 21.4 6.18783 21.4 6.4V7.2Z"
        fill="#858A91"
      />
      <Rect
        x={0.238095}
        y={0.238095}
        width={29.5238}
        height={19.5238}
        rx={1.7619}
        stroke="#CCCCCC"
        strokeWidth={0.47619}
      />
    </Svg>
  );
};
