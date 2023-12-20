import { userState} from "react"
import MOCKE_DATA from "../mock/data.json"


export const pedirDatos =  () => {

return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(MOCKE_DATA)
        }, 1000)
    })
}