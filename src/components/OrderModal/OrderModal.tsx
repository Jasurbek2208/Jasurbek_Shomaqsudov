import React, { useState } from 'react'
import styled from 'styled-components'
import toast from 'react-hot-toast'
import axios from 'axios'

// Styled Components
const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
`

const H2 = styled.h2`
  text-align: center;
  margin: 5px 0px 10px;
  color: #000;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`

const Select = styled.select`
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`

const Textarea = styled.textarea`
  padding: 8px;
  margin-bottom: 10px;
  width: 100% !important;
  max-width: 100% !important;
  min-width: 100% !important;
  min-height: 85px;
  max-height: 145px;
  border: 1px solid #ccc;
  border-radius: 4px;
`

const Button = styled.button`
  padding: 10px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #0056b3;
  }
`

interface OrderModalProps {
  isOpen: boolean
  onClose: () => void
}

const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    phone: '',
    country: '',
    email: '',
    telegramUsername: '',
    companyName: '',
    oldSiteLink: '',
    siteType: 'landing_page',
    estimatedBudget: '',
    description: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e?.preventDefault()

    const API_URL: string = `https://api.telegram.org/bot${import.meta.env.VITE_TELEGRAM_BOT_TOKEN}/sendMessage`

    let name: string = (e.currentTarget[0] as HTMLInputElement).value
    let surname: string = (e.currentTarget[1] as HTMLInputElement).value
    let phone: string = (e.currentTarget[2] as HTMLInputElement).value
    let country: string = (e.currentTarget[3] as HTMLInputElement).value
    let email: string = (e.currentTarget[4] as HTMLInputElement).value
    let telegramUsername: string = (e.currentTarget[5] as HTMLInputElement).value
    let companyName: string = (e.currentTarget[6] as HTMLInputElement).value
    let oldSiteLink: string = (e.currentTarget[7] as HTMLInputElement).value
    let siteType: string = (e.currentTarget[8] as HTMLInputElement).value
    let estimatedBudget: string = (e.currentTarget[0] as HTMLInputElement).value
    let description: string = (e.currentTarget[10] as HTMLInputElement).value

    let text: string = `<b>Ismi:</b> ${name} \n\n<b>Familiyasi:</b> ${surname} \n\n<b>Telefon raqami:</b> ${phone} \n\n<b>Manzil:</b> ${country} \n\n<b>E-pochta:</b> ${email} \n\n<b>Telegram:</b> ${telegramUsername} \n\n<b>Kompanniya Nomi:</b> ${companyName} \n\n<b>Mavjud sayt linki:</b> ${oldSiteLink} \n\n<b>Sayt turi:</b> ${siteType} \n\n<b>Ko'zlanayotgan budjet:</b> ${estimatedBudget} \n\n<b>Qo'shimcha Xabar:</b> ${description}`

    try {
      await axios.post(
        API_URL,
        {
          chat_id: import.meta.env.VITE_TELEGRAM_CHAT_ID,
          parse_mode: 'html',
          text,
        },
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      )
      ;(e.target as HTMLFormElement)?.reset()
      toast.success('Message sent successfully!')
      onClose()
    } catch {
      toast.error('There was a problem sending the message. Please try again!')
    }
  }

  if (!isOpen) return null

  return (
    <ModalBackdrop onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <H2>Send Order</H2>
        <Form onSubmit={handleSubmit}>
          <Input type='text' name='name' placeholder='Name' value={formData.name} onChange={handleChange} required />
          <Input type='text' name='surname' placeholder='Surname' value={formData.surname} onChange={handleChange} required />
          <Input type='text' name='phone' placeholder='Phone' value={formData.phone} onChange={handleChange} required />
          <Input type='text' name='country' placeholder='Country' value={formData.country} onChange={handleChange} required />
          <Input type='email' name='email' placeholder='Email' value={formData.email} onChange={handleChange} required />
          <Input type='text' name='telegramUsername' placeholder='Telegram Username' value={formData.telegramUsername} onChange={handleChange} />
          <Input type='text' name='companyName' placeholder='Company Name' value={formData.companyName} onChange={handleChange} />
          <Input type='url' name='oldSiteLink' placeholder='Old Site Link' value={formData.oldSiteLink} onChange={handleChange} />
          <Select name='siteType' value={formData.siteType} onChange={handleChange}>
            <option value='landing_page'>Landing Page</option>
            <option value='multi_page'>Multi Page</option>
            <option value='admin_panel'>With Admin Panels</option>
            <option value='business_control_system'>System for Business Control</option>
          </Select>
          <Input type='number' name='estimatedBudget' placeholder='Estimated Budget (USD)' value={formData.estimatedBudget} onChange={handleChange} required />
          <Textarea name='description' placeholder='Description' value={formData.description} onChange={handleChange} required />
          <Button type='submit'>Submit</Button>
        </Form>
      </ModalContent>
    </ModalBackdrop>
  )
}

export default OrderModal