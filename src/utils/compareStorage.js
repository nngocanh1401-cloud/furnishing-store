const COMPARE_STORAGE_KEY = "furniro_compare_products";
export const MAX_COMPARE_PRODUCTS = 3;

export function getCompareProductIds() {
  if (typeof window === "undefined") return [];

  const storedValue = localStorage.getItem(COMPARE_STORAGE_KEY);

  if (!storedValue) return [];

  try {
    return JSON.parse(storedValue);
  } catch {
    return [];
  }
}

export function saveCompareProductIds(productIds) {
  if (typeof window === "undefined") return;

  localStorage.setItem(
    COMPARE_STORAGE_KEY,
    JSON.stringify(productIds.slice(0, MAX_COMPARE_PRODUCTS))
  );
}

export function addProductToCompare(productId) {
  const currentIds = getCompareProductIds();
  const id = Number(productId);

  if (currentIds.includes(id)) {
    return currentIds;
  }

  const nextIds = [...currentIds, id].slice(0, MAX_COMPARE_PRODUCTS);

  saveCompareProductIds(nextIds);

  return nextIds;
}

export function removeProductFromCompare(productId) {
  const id = Number(productId);

  const nextIds = getCompareProductIds().filter(
    (currentId) => Number(currentId) !== id
  );

  saveCompareProductIds(nextIds);

  return nextIds;
}