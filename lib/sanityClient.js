import { createClient } from 'next-sanity'

const config = {
  projectId: 'p4osbiim', // 替換為你的專案 ID
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: true,
}

const client = createClient(config)
export default client