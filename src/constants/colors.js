const collection = {
  Black: '#000000',
  Cream: '#fdaf7b',
  DarkYellow: '#E6B800',
  Gray: '#808080',
  OffWhite: '#FAF9F6',
  Purple: '#401F71',
  SteelBlue: '#426598',
  Teal: '#0c908a',
  White: '#FFFFFF',
  Yellow: '#FFC700',
};

const Colors = Object.entries(collection).map((entries) => {
  const generateColor = (opacity = 100) => (
    `${entries[1]}${Math.round(opacity * 2.55).toString(16)}`
  );
  return [entries[0], generateColor];
});

export default Object.fromEntries(Colors);
