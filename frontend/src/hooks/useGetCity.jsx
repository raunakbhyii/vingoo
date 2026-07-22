import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {setCurrentAddress, setCurrentCity,setCurrentState} from '../redux/userSlice'

function useGetCity() {
    const dispatch = useDispatch()
    const { userData } = useSelector(state => state.user)
    const apiKey = import.meta.env.VITE_GEOAPIKEY

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                try {
                    const latitude = position.coords.latitude
                    const longitude = position.coords.longitude

                    const result = await axios.get(
                        `https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&format=json&apiKey=${apiKey}`
                    )

                    console.log("FULL RESPONSE:", result.data)

                    const location = result?.data?.results?.[0]  // ✅ SAFE

                    if (!location) {
                        console.log("❌ No location found")
                        return
                    }

                    dispatch(setCurrentCity(location.city || location.town || location.village))
                    dispatch(setCurrentState(location.state))
                     dispatch(setCurrentAddress(location.address_line1 ||location.address_line2))
                     console.log(result.data)

                    console.log(location.state)

                } catch (error) {
                    console.log("❌ API Error:", error)
                }
            },
            (error) => {
                console.log("❌ Location Error:", error)
            }
        )
    }, [userData])
}

export default useGetCity