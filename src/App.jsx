function App() {
  return (
    <div style={styled.container}>
      <MainScreen />
    </div>
  );
}

export const MainScreen = () => {
  return (
    <div style={styled.container}>
      <div style={styled.card}>Card</div>
    </div>
  );
};

const styled = {
  container: {
    padding: 30,
  },
  card: {
    padding: 30,
    border: "1px solid black",
    borderRadius: 10,
  },
};

export default App;
