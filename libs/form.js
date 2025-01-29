import Swal from 'sweetalert2'

/**
   * Submit data to dashboard api and show a success/error message
   * 
   * @param {Object} data Form data
   * @param {string} endpoint Endpoint to send data to
   * @param {Object} tAlerts Translations object with alerts data
   */
export async function sendDataApi(data, endpoint, tAlerts) {

  // Send data to server side endpoint
  const response = await fetch(`/api/dashboard/${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  if (response.ok) {
    Swal.fire({
      title: tAlerts('success.title'),
      text: tAlerts('success.text'),
      icon: 'success',
      confirmButtonText: tAlerts('success.confirmButtonText'),
    })
  } else {
    console.error({ response })
    Swal.fire({
      title: tAlerts('error.title'),
      text: tAlerts('error.text'),
      icon: 'error',
      confirmButtonText: tAlerts('error.confirmButtonText'),
    })
  }
}
