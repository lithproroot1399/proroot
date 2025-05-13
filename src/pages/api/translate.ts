// pages/api/translate.ts

import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  translatedText?: string
  error?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { text, target } = req.body

  if (!text || !target) {
    return res.status(400).json({ error: 'Missing text or target language' })
  }

  try {
    const response = await fetch('https://libretranslate.de/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        q: text,
        source: 'auto',
        target,
        format: 'text',
      }),
    })

    const data = await response.json()

    return res.status(200).json({ translatedText: data.translatedText })
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch translation' })
  }
}
