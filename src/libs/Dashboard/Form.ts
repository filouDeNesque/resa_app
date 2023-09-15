import { Horse } from "~/types/Horse.type"



export function SubmitHorse(Horse:object, createHorse:()=>void){
console.log(Horse)
const horse: Horse = {
    id: 'unknow',
    name: `${Horse.floating_first_name as string} ${data.floating_last_name as string}`,
    size: parseFloat(data.floating_size as string),
    birthDate: new Date(data.floating_birthDate as string),
    ownerId: "cllqs7p350000ukpc3b3l92mc",
    createdDate: null,
    UdpdateDate: null,
    placeId: null,
    stabId: null,
    halfLeaseUsersId: null
}
createHorse(Horse)
}