export default function handleKeyDown(event: KeyboardEvent): void {
  // Disable F12
  if (event?.key === 'F12') {
    event?.preventDefault()
  }

  // Disable Ctrl+Shift+I (Windows/Linux) and Cmd+Option+I (Mac)
  if ((event?.ctrlKey || event?.metaKey) && event?.shiftKey && event?.key === 'I') {
    event?.preventDefault()
  }

  // Disable Ctrl+Shift+C (Windows/Linux) and Cmd+Option+C (Mac)
  if ((event?.ctrlKey || event?.metaKey) && event?.shiftKey && event?.key === 'C') {
    event?.preventDefault()
  }

  // Disable Ctrl+Shift+J (Windows/Linux) and Cmd+Option+J (Mac)
  if ((event?.ctrlKey || event?.metaKey) && event?.shiftKey && event?.key === 'J') {
    event?.preventDefault()
  }

  // Disable Ctrl+U (Windows/Linux) and Cmd+U (Mac)
  if ((event?.ctrlKey || event?.metaKey) && event?.key === 'U') {
    event?.preventDefault()
  }
}