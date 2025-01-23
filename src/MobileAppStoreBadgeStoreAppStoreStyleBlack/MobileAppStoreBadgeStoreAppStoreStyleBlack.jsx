import "./MobileAppStoreBadgeStoreAppStoreStyleBlack.css";

export const MobileAppStoreBadgeStoreAppStoreStyleBlack = ({
  store = "f-droid",
  styleVariant = "outline",
  className,
  ...props
}) => {
  const variantsClassName = "store-" + store + " style-variant-" + styleVariant;

  return (
    <img
      className={
        "mobile-app-store-badge-store-app-store-style-black " +
        className +
        " " +
        variantsClassName
      }
      src="mobile-app-store-badge-store-app-store-style-black.svg"
    />
  );
};
