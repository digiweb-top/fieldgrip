import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();
  
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>
            {t('about.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Company Story */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>{t('about.ourStory')}</h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                {t('about.storyContent.paragraph1')}
              </p>
              <p>
                {t('about.storyContent.paragraph2')}
              </p>
              <p>
                {t('about.storyContent.paragraph3')}
              </p>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h4 className="text-2xl font-bold text-green-800 mb-4" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>{t('about.mission.title')}</h4>
              <p className="text-gray-700">
                {t('about.mission.content')}
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h4 className="text-2xl font-bold text-green-800 mb-4" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>{t('about.vision.title')}</h4>
              <p className="text-gray-700">
                {t('about.vision.content')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}