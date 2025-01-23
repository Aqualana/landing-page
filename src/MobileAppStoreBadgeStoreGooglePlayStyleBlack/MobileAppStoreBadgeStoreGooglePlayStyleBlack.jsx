import "./MobileAppStoreBadgeStoreGooglePlayStyleBlack.css";

export const MobileAppStoreBadgeStoreGooglePlayStyleBlack = ({
  store = "f-droid",
  styleVariant = "outline",
  className,
  ...props
}) => {
  const variantsClassName = "store-" + store + " style-variant-" + styleVariant;

  return (
    <div
      className={
        "mobile-app-store-badge-store-google-play-style-black " +
        className +
        " " +
        variantsClassName
      }
    >
      <img className="google-play" src="google-play0.svg" />
      <img className="get-it-on" src="get-it-on0.svg" />
      <img className="google-play-logo" src="google-play-logo0.svg" />
    </div>
  );
};
