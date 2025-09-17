'use client'
import { useState, useRef, useEffect } from 'react'

export default function SupportBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { text: '👋 Welcome to Quantum Flex AI Support! I\'m here to help you 24/7.', sender: 'bot' },
    { text: 'How can I assist you today?', sender: 'bot' }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const getBotResponse = (message) => {
    const lowerMessage = message.toLowerCase()

    if (lowerMessage.includes('plantreach') || lowerMessage.includes('plant reach')) {
      return "PlantReach is our flagship manufacturing communication platform. It provides real-time messaging for factory floors, advanced shift management, and AI-powered analytics. Key features include multi-tenant architecture, enterprise security, and mobile apps for floor workers. Would you like to schedule a demo?"
    }

    if (lowerMessage.includes('humanoid') || lowerMessage.includes('robot')) {
      return "Quantum Humanoids is our upcoming line of AI-powered industrial robots, launching in 2026. They feature advanced AI decision-making, safe human-robot collaboration, and 24/7 autonomous operation. You can join our waitlist to be among the first to experience this revolutionary technology!"
    }

    if (lowerMessage.includes('support') || lowerMessage.includes('help') || lowerMessage.includes('issue')) {
      return "I'm here to help! For technical support, please describe your issue and I'll connect you with the right specialist. For immediate assistance, you can also email support@quantumflexai.com."
    }

    if (lowerMessage.includes('demo') || lowerMessage.includes('trial') || lowerMessage.includes('test')) {
      return "Excellent! I can help you schedule a personalized demo of PlantReach. Please use the contact form on our website or email sales@quantumflexai.com. Our team will set up a demo tailored to your specific manufacturing needs within 24 hours."
    }

    if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('pricing')) {
      return "PlantReach pricing is customized based on your facility size, number of users, and required features. We offer flexible plans starting from small factories to enterprise deployments. Contact our sales team for a personalized quote that fits your budget and requirements."
    }

    if (lowerMessage.includes('feature') || lowerMessage.includes('capability')) {
      return "PlantReach includes: real-time messaging, shift scheduling, production tracking, quality control alerts, maintenance management, compliance reporting, and AI analytics. Everything is accessible via web and mobile apps. Which specific feature interests you most?"
    }

    if (lowerMessage.includes('integration') || lowerMessage.includes('api') || lowerMessage.includes('connect')) {
      return "PlantReach offers robust API integration with popular ERP systems like SAP, Oracle, and Microsoft Dynamics. We also support custom integrations via REST API and webhooks. Our technical team can assist with seamless integration into your existing infrastructure."
    }

    if (lowerMessage.includes('security') || lowerMessage.includes('secure') || lowerMessage.includes('privacy')) {
      return "Security is our top priority. PlantReach features end-to-end encryption, SOC 2 compliance, GDPR compliance, role-based access control, and regular security audits. All data is stored in secure, redundant data centers with 99.9% uptime guarantee."
    }

    if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('phone')) {
      return "You can reach us at: Email: admin@quantumflexai.com | Calgary, Alberta, Canada. Our business hours are Mon-Fri, 9 AM - 6 PM MST, but this support bot is available 24/7!"
    }

    return "Thanks for your message! I can help you with information about PlantReach, our upcoming Humanoids, pricing, demos, technical support, and more. What specific information would you like to know?"
  }

  const toggleBot = () => {
    setIsOpen(!isOpen)
  }

  const sendMessage = () => {
    if (inputValue.trim() === '') return

    const newMessage = { text: inputValue, sender: 'user' }
    setMessages([...messages, newMessage])
    setInputValue('')
    setIsTyping(true)

    setTimeout(() => {
      const response = getBotResponse(inputValue)
      setMessages(prev => [...prev, { text: response, sender: 'bot' }])
      setIsTyping(false)
    }, 1500)
  }

  const sendQuickMessage = (message) => {
    setMessages([...messages, { text: message, sender: 'user' }])
    setIsTyping(true)

    setTimeout(() => {
      const response = getBotResponse(message)
      setMessages(prev => [...prev, { text: response, sender: 'bot' }])
      setIsTyping(false)
    }, 1500)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage()
    }
  }

  // Make bot accessible globally for Hero component
  useEffect(() => {
    window.openSupportBot = () => {
      setIsOpen(true)
    }
  }, [])

  return (
    <div className="support-bot">
      <button className="bot-button" onClick={toggleBot} id="botButton">
        {isOpen ? '✕' : '💬'}
      </button>

      <div className={`bot-window ${isOpen ? 'active' : ''}`} id="botWindow">
        <div className="bot-header">
          <div>
            <h4>Support Assistant</h4>
            <div className="bot-status">
              <span className="status-dot"></span>
              <span>Online</span>
            </div>
          </div>
          <button className="bot-close" onClick={toggleBot}>×</button>
        </div>

        <div className="bot-messages" id="botMessages">
          {messages.map((msg, index) => (
            <div key={index} className={`bot-message ${msg.sender}`}>
              <p>{msg.text}</p>
            </div>
          ))}
          {isTyping && (
            <div className="bot-message bot typing">
              <span className="typing-dot"></span>
              <span className="typing-dot"></span>
              <span className="typing-dot"></span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="bot-quick-actions">
          <button className="quick-action" onClick={() => sendQuickMessage('Tell me about PlantReach')}>
            PlantReach Info
          </button>
          <button className="quick-action" onClick={() => sendQuickMessage('I need technical support')}>
            Technical Support
          </button>
          <button className="quick-action" onClick={() => sendQuickMessage('Schedule a demo')}>
            Schedule Demo
          </button>
          <button className="quick-action" onClick={() => sendQuickMessage('Pricing information')}>
            Pricing
          </button>
        </div>

        <div className="bot-input">
          <input 
            type="text" 
            id="botInput" 
            placeholder="Type your message..." 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button onClick={sendMessage}>➤</button>
        </div>
      </div>
    </div>
  )
}