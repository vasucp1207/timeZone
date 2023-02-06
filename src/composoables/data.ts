import timezoneRow from 'timezones.json'

export const timezone = timezoneRow.flatMap(i => {
    return i.utc.map(u => {
      return {
        name: u,
        offset: i.offset,
        isdst: i.isdst
      }
    })
  })