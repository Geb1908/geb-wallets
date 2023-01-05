//Configuración formato de moneda ARS
export const formatPrice = (number) => {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
  }).format(number);
};
