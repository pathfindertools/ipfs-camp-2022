import toml

t = toml.load('./devent.toml')
speakers = t['speakers']
speakers.sort(key=lambda x: x['name'].split()[-1])

print(toml.dumps({'speakers': speakers}))
