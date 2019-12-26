
import { get } from '@/features/app/utils/fetch'
import api from '@/features/app/constants/api.conf'

export const service = {
  getDictList: () => get(api.getDictList, { loading: false })
};