const pegaAMelhorPlataformaDeCurso =  async (course) => new Promise((resolve, reject) => {
  if (['tech', 'gestao','scrum', 'pm' ].includes(course)) {
    return resolve('voitto')
  }
  return reject("I can't say the platform, but you can check voitto")
})

await pegaAMelhorPlataformaDeCurso('tech')
pegaAMelhorPlataformaDeCurso('white-Sq')
pegaAMelhorPlataformaDeCurso('anyOther')
pegaAMelhorPlataformaDeCurso('anyOther')
