import * as cheerio from 'cheerio'
import * as s from 'superstruct'

export interface AnggotaKeluarga {
  rw: string
  rt: string
  dusun: string
  alamat: string
  kode_keluarga: string
  nama_kepala_keluarga: string
  no_di_kk: number
  nik: string
  nama: string // nama_anggota_keluarga
  jenis_kelamin: 'LAKI-LAKI' | 'PEREMPUAN' | (string & {})
  hubungan: string
  tempat_lahir: string
  tanggal_lahir: string
  usia: number
  status: 'Kawin' | 'Belum Kawin' | 'Janda/Duda' | (string & {})
  agama: string
  golongan_darah: string
  kewarganegaraan: string
  etnis: string
  pendidikan: string
  pekerjaan: string
}

export function parseAgtKeluarga(input: string): AnggotaKeluarga[] {
  const data: AnggotaKeluarga[] = []
  // parsed html in unist
  const $ = cheerio.load(input, null, false)
  const trs = $('tr.scGridFieldOdd, tr.scGridFieldEven')
  for (const tr of trs) {
    const d: string[] = []
    const tds = $('td', tr).toArray()

    for (const td of tds) d.push($('*', td).text())

    data.push({
      rw: d[1],
      rt: d[2],
      dusun: d[3],
      alamat: d[4],
      kode_keluarga: d[5],
      nama_kepala_keluarga: d[6],
      no_di_kk: +d[7],
      nik: d[8],
      nama: d[9],
      jenis_kelamin: d[10],
      hubungan: d[11],
      tempat_lahir: d[12],
      tanggal_lahir: d[13],
      usia: +d[14],
      status: d[15],
      agama: d[16],
      golongan_darah: d[17],
      kewarganegaraan: d[18],
      etnis: d[19],
      pendidikan: d[20],
      pekerjaan: d[21],
    })
  }

  return data
}
