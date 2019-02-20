const wrapInQuotes = s => `"${s}"`

const eventDataToString = ({ targetId, eventName, param, time, args }) => {
  const paramString = Array.isArray(param) ? '[' + param.map(wrapInQuotes).join(', ') + ']' : wrapInQuotes(param)
  return `${targetId} ${eventName}>${paramString}(${args.map(wrapInQuotes).join(', ')})`
}
