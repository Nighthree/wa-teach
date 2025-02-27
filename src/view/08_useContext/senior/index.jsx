import SeniorContextProvider from "./seniorContetxt";
import Container from "./container";

const Senior = () => {
  return (
    <SeniorContextProvider>
      <Container />
    </SeniorContextProvider>
  );
};
export default Senior;
