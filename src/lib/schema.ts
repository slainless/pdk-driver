import * as s from 'superstruct'
import { AnggotaKeluarga } from './parser/anggota-keluarga'

interface GetPenduduk {
  setValue: Array<{
    field: string
    value: string
  }>
}

export const GetPendudukScheme: s.Describe<GetPenduduk> = s.type({
  setValue: s.array(
    s.object({
      field: s.string(),
      value: s.string(),
    })
  ),
})

export const AnggotaKeluargaScheme: s.Describe<AnggotaKeluarga> = s.object({
  rw: s.string(),
  rt: s.string(),
  dusun: s.string(),
  alamat: s.string(),
  kode_keluarga: s.string(),
  nama_kepala_keluarga: s.string(),
  no_di_kk: s.number(),
  nik: s.string(),
  nama: s.string(), // nama_anggota_keluarga
  jenis_kelamin: s.string(),
  hubungan: s.string(),
  tempat_lahir: s.string(),
  tanggal_lahir: s.string(),
  usia: s.number(),
  status: s.string(),
  agama: s.string(),
  golongan_darah: s.string(),
  kewarganegaraan: s.string(),
  etnis: s.string(),
  pendidikan: s.string(),
  pekerjaan: s.string(),
})
