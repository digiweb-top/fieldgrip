import { useState } from 'react'
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    crop: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', phone: '', crop: '', message: '' })
    alert(t('contact.form.successMessage'))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: "📍",
      title: t('contact.info.address.title'),
      details: [t('contact.info.address.line1'), t('contact.info.address.line2'), t('contact.info.address.line3')]
    },
    {
      icon: "📞",
      title: t('contact.info.phone.title'),
      details: ["+91 98765 43210", "+91 87654 32109"]
    },
    {
      icon: "✉️",
      title: t('contact.info.email.title'),
      details: ["info@fieldgrip.com", "support@fieldgrip.com"]
    },
    {
      icon: "🕒",
      title: t('contact.info.hours.title'),
      details: [t('contact.info.hours.weekdays'), t('contact.info.hours.sunday')]
    }
  ]

  const crops = t('contact.crops', { returnObjects: true }) as string[]

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>
            {t('contact.title')}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Send Us a Message */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>{t('contact.sendMessage')}</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {t('contact.form.fullName')} {t('contact.form.required')}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  placeholder={t('contact.form.placeholders.name')}
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {t('contact.form.email')} {t('contact.form.required')}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  placeholder={t('contact.form.placeholders.email')}
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {t('contact.form.phone')} {t('contact.form.required')}
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  placeholder={t('contact.form.placeholders.phone')}
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {t('contact.form.primaryCrop')}
                </label>
                <select
                  name="crop"
                  value={formData.crop}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  <option value="">{t('contact.form.selectCrop')}</option>
                  {crops.map((crop) => (
                    <option key={crop} value={crop}>{crop}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {t('contact.form.message')}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  placeholder={t('contact.form.messagePlaceholder')}
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-md font-semibold hover:bg-green-700 transition-colors duration-200"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {t('contact.form.sendButton')}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>{t('contact.contactInfo')}</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div className="text-2xl mr-4 mt-1">{info.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>{info.title}</h4>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 text-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Connect on WhatsApp */}
          <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl shadow-xl p-8 text-white text-center">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>{t('contact.whatsapp.title')}</h3>
            <p className="mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>{t('contact.whatsapp.subtitle')}</p>
            <button className="bg-white text-green-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors duration-200" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {t('contact.whatsapp.button')}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}