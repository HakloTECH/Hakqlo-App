[].concat(...Object.values(os.networkInterfaces())).filter(details => !details.internal && details.family=='IPv4').pop().address