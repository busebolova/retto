"use client"

import { useState } from "react"
import { ChevronDown, ChevronRight, Key, Settings, Zap } from "lucide-react"

export default function InstagramSetupGuide() {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({})

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }))
  }

  const setupSteps = [
    {
      id: "basic-display",
      title: "Instagram Basic Display API",
      icon: <Key className="w-5 h-5" />,
      description: "Kişisel Instagram hesabınız için",
      steps: [
        "Facebook Developers'a gidin (developers.facebook.com)",
        "Yeni bir uygulama oluşturun",
        "Instagram Basic Display ürününü ekleyin",
        "Test kullanıcısı olarak kendinizi ekleyin",
        "Access token'ı alın ve .env dosyasına ekleyin",
      ],
      pros: ["Kolay kurulum", "Kişisel hesaplar için ideal"],
      cons: ["60 günde bir token yenileme gerekli", "Sınırlı özellikler"],
    },
    {
      id: "business-api",
      title: "Instagram Business API",
      icon: <Settings className="w-5 h-5" />,
      description: "İşletme hesapları için gelişmiş özellikler",
      steps: [
        "Instagram hesabınızı Business hesabına çevirin",
        "Facebook sayfası oluşturun ve Instagram'ı bağlayın",
        "Facebook Developers'da Instagram Graph API'yi aktifleştirin",
        "Gerekli izinleri alın",
        "Long-lived access token oluşturun",
      ],
      pros: ["Uzun süreli token", "Gelişmiş analytics", "Hashtag verileri"],
      cons: ["Daha karmaşık kurulum", "Business hesabı gerekli"],
    },
    {
      id: "third-party",
      title: "Üçüncü Parti Servisler",
      icon: <Zap className="w-5 h-5" />,
      description: "Hazır çözümler",
      steps: [
        "Instagram feed servisi seçin (ör: Juicer, SnapWidget)",
        "Hesabınızı bağlayın",
        "Widget kodunu alın",
        "API endpoint'ini projenize entegre edin",
      ],
      pros: ["Hızlı kurulum", "Bakım gerektirmez", "Ek özellikler"],
      cons: ["Aylık ücret", "Üçüncü parti bağımlılığı"],
    },
  ]

  return (
    <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
      <h3 className="text-xl font-medium text-white mb-4">Instagram Entegrasyonu Kurulum Rehberi</h3>

      <div className="space-y-4">
        {setupSteps.map((step) => (
          <div key={step.id} className="border border-gray-700 rounded-lg">
            <button
              onClick={() => toggleSection(step.id)}
              className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-800 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <div className="text-blue-400">{step.icon}</div>
                <div>
                  <h4 className="text-white font-medium">{step.title}</h4>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                </div>
              </div>
              {openSections[step.id] ? (
                <ChevronDown className="w-5 h-5 text-gray-400" />
              ) : (
                <ChevronRight className="w-5 h-5 text-gray-400" />
              )}
            </button>

            {openSections[step.id] && (
              <div className="p-4 border-t border-gray-700 bg-gray-800/50">
                <div className="space-y-4">
                  <div>
                    <h5 className="text-white font-medium mb-2">Kurulum Adımları:</h5>
                    <ol className="list-decimal list-inside space-y-1 text-gray-300 text-sm">
                      {step.steps.map((stepItem, index) => (
                        <li key={index}>{stepItem}</li>
                      ))}
                    </ol>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h6 className="text-green-400 font-medium mb-1">Avantajlar:</h6>
                      <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                        {step.pros.map((pro, index) => (
                          <li key={index}>{pro}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h6 className="text-red-400 font-medium mb-1">Dezavantajlar:</h6>
                      <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                        {step.cons.map((con, index) => (
                          <li key={index}>{con}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-blue-900/20 border border-blue-700/30 rounded-lg">
        <h4 className="text-blue-400 font-medium mb-2">💡 Önerilen Yaklaşım</h4>
        <p className="text-gray-300 text-sm">
          Başlangıç için Instagram Basic Display API'yi kullanın. Daha sonra ihtiyaçlarınıza göre Business API'ye geçiş
          yapabilirsiniz.
        </p>
      </div>
    </div>
  )
}
