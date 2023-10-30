export async function copyURL() {
  try {
    const currentUrl = window.location.href;
    return await navigator.clipboard.writeText(currentUrl);
  } catch (error) {
    console.error('not copied', error);
  }
}
