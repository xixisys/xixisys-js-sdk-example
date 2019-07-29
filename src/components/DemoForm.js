import React from 'react'
import { useLocation, useRoute } from 'wouter'

import Button from './Button'
import LabelInput from './LabelInput';

const DemoForm = () => {

  const [, setLocation] = useLocation();

  let inputRef = React.createRef()

  const handleClickCn = () => {
    setLocation(`/sds/${inputRef.current.value.trim()}/cn`)
  }

  const handleClickGhs = () => {
    setLocation(`/sds/${inputRef.current.value.trim()}/ghs`)
  }

  const handleClickCompliance = () => {
    setLocation(`/compliance/${inputRef.current.value.trim()}`)
  }

  const [matchCompliance, paramsCompliance] = useRoute("/compliance/:cas");
  const [matchSds, paramsSds] = useRoute("/sds/:cas/:edition");

  let cas = ""
  if (matchCompliance) {
    cas = paramsCompliance.cas
  }

  if (matchSds) {
    cas = paramsSds.cas
  }


  return (
    <div>
      <LabelInput label='CAS：' inputRef={inputRef} value={cas}/>

      <Button onClick={handleClickCompliance}>查看合规数据</Button>
      <Button onClick={handleClickCn}>查看中文版 SDS</Button>
      <Button onClick={handleClickGhs}>查看GHS版 SDS</Button>

    </div>
  )
}

export default DemoForm
