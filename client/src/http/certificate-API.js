import {$host} from './index'


export const fetchCategory = async () => {
    const {data} = await $host.get('api/category')
    return data
}

export const fetchCertificate = async () => {
    const {data} = await $host.get('api/certificate')
    return data
}

export const fetchOneCertificate = async (id) => {
    const {data} = await $host.get('api/certificate/' + id)
    return data
}
