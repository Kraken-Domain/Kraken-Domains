export const formatAddress = (address) => {
  let addressFormatted;
  if (address) {
    addressFormatted = address.slice(0, -16);
  } else {
    addressFormatted = "---";
  }
  return addressFormatted;
};
