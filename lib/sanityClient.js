import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'iy981be1',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skHRyx5JljZ2I5puDkVP8JdXybD5w83FwDRoKJa1KIF4K4TETF8k62o9Hv2tVF2mKmfPzV3NTkzRZVaqA1NrT2uZqJZ1luWqVSqTgkcShQftpaPjQMMSKangheLaDgpVo9HmAcxCxLmH1b1SMryYWetZ1YI8ombSw61vBoTAbzplqpHa7Epb',
  useCdn: false,
})
