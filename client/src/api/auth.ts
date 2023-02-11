import axios from 'axios'
axios.defaults.withCredentials = false

export async function onRegistration(registrationData: any) {
  return await axios.post(
    'http://localhost:5000/api/v1/slush/register',
    registrationData
  )
}

export async function onLogin(loginData: any) {
  await axios.post('http://localhost:5000/api/v1/slush/login', loginData).then(function (response) {console.log("here is :",response)})

}

export async function onLogout() {
  return await axios.get('http://localhost:5000/api/v1/slush/logout')
}
