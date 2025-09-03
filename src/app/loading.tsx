import { Flex, Spin } from "antd"

const LoadingPage = () => {
  return (
    <Flex
      style={{ height: "100vh" }}
      justify='center'
      align='center'
    >
      <Spin size='large' />
    </Flex>
  )
}

export default LoadingPage
