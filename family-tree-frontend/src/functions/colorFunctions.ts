import { SexDto } from '../api/ApiClient'

export const personColor = (sex: SexDto) => (sex === SexDto.Female ? '#ffbdbd' : '#b6f0ff')
