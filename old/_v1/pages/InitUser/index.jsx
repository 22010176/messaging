import './styles.scss'

import TextInput from './components/TextInput'
import Button from './components/Button'


export default function () {
  return (
    <div id='init-user'>
      <form className='create-user-form'>
        <TextInput name={"Email"} disabled />
        <TextInput name={"Name"} />
        <Button name={"Submit"} />
      </form>
      {/* <h1>Init Uers</h1> */}
    </div>
  )
}