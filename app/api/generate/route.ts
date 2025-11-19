async function callGoogleGenerativeAPI(messages: Message[], model: string, apiKey: string) {
  // Convertimos mensajes al formato oficial de Gemini
  const contents = messages.map(m => ({
    role: m.role,
    parts: [{ text: m.content }],
  }))

  const body = {
    contents,
    generationConfig: {
      temperature: 0.2,
      maxOutputTokens: 512,
    },
  }

  const url =
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    const text = await res.text()
    throw new Error(`Google API error ${res.status}: ${text}`)
  }

  const data = await res.json()

  const text =
    data.candidates?.[0]?.content?.parts?.[0]?.text ||
    data.candidates?.[0]?.output ||
    ''

  return String(text)
}
