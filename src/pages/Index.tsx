import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar } from '@/components/ui/calendar'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import Icon from '@/components/ui/icon'

export default function Index() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  const services = [
    {
      title: 'Терапия',
      description: 'Общая медицинская помощь и диагностика',
      icon: 'Stethoscope',
      price: 'от 2500 ₽'
    },
    {
      title: 'Кардиология',
      description: 'Диагностика и лечение сердечно-сосудистых заболеваний',
      icon: 'Heart',
      price: 'от 3500 ₽'
    },
    {
      title: 'Лабораторные исследования',
      description: 'Полный спектр анализов и диагностики',
      icon: 'TestTube',
      price: 'от 500 ₽'
    },
    {
      title: 'УЗИ диагностика',
      description: 'Современное ультразвуковое исследование',
      icon: 'Waves',
      price: 'от 1800 ₽'
    },
    {
      title: 'Неврология',
      description: 'Диагностика и лечение заболеваний нервной системы',
      icon: 'Brain',
      price: 'от 3000 ₽'
    },
    {
      title: 'Офтальмология',
      description: 'Лечение заболеваний глаз и коррекция зрения',
      icon: 'Eye',
      price: 'от 2200 ₽'
    }
  ]

  const doctors = [
    { name: 'Доктор Иванова А.С.', specialty: 'Терапевт', time: '09:00' },
    { name: 'Доктор Петров В.И.', specialty: 'Кардиолог', time: '10:30' },
    { name: 'Доктор Сидорова М.В.', specialty: 'Невролог', time: '14:00' },
    { name: 'Доктор Козлов Д.А.', specialty: 'Офтальмолог', time: '15:30' }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Heart" className="text-medical-blue" size={32} />
              <span className="text-xl font-semibold text-gray-900">МедЦентр</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-medical-blue transition-colors">Главная</a>
              <a href="#services" className="text-gray-700 hover:text-medical-blue transition-colors">Услуги</a>
              <a href="#about" className="text-gray-700 hover:text-medical-blue transition-colors">О клинике</a>
              <a href="#contact" className="text-gray-700 hover:text-medical-blue transition-colors">Контакты</a>
              <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-medical-blue hover:bg-blue-600 text-white">
                    Записаться
                  </Button>
                </DialogTrigger>
              </Dialog>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-r from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Современная медицина
                <span className="text-medical-blue block">для вашего здоровья</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Профессиональные врачи, современное оборудование и индивидуальный подход к каждому пациенту. Мы заботимся о вашем здоровье с 2010 года.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
                  <DialogTrigger asChild>
                    <Button size="lg" className="bg-medical-blue hover:bg-blue-600 text-white">
                      <Icon name="Calendar" className="mr-2" size={20} />
                      Записаться на приём
                    </Button>
                  </DialogTrigger>
                </Dialog>
                <Button variant="outline" size="lg" className="border-medical-blue text-medical-blue hover:bg-blue-50">
                  <Icon name="Phone" className="mr-2" size={20} />
                  +7 (495) 123-45-67
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/9940ecbf-9a4c-488e-b786-0378b74f722f.jpg" 
                alt="Современная медицинская клиника"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-medical-green rounded-full flex items-center justify-center">
                    <Icon name="CheckCircle" className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">15+ лет опыта</p>
                    <p className="text-sm text-gray-600">Доверия пациентов</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный спектр медицинских услуг с использованием современного оборудования
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardHeader>
                  <div className="w-12 h-12 bg-medical-blue/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} className="text-medical-blue" size={24} />
                  </div>
                  <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary" className="bg-medical-green/10 text-medical-green border-0">
                      {service.price}
                    </Badge>
                    <Button variant="ghost" size="sm" className="text-medical-blue hover:bg-medical-blue/10">
                      Подробнее
                      <Icon name="ArrowRight" className="ml-1" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                О нашей клинике
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                МедЦентр — это современная частная клиника, которая оказывает полный спектр медицинских услуг. 
                Мы объединили опытных врачей, передовые технологии и индивидуальный подход к каждому пациенту.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Наша миссия — обеспечить высококачественную медицинскую помощь, основанную на принципах 
                доказательной медицины и заботливого отношения к каждому пациенту.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-medical-blue mb-2">5000+</div>
                  <div className="text-gray-600">Довольных пациентов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-medical-blue mb-2">25+</div>
                  <div className="text-gray-600">Квалифицированных врачей</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-medical-blue mb-2">15+</div>
                  <div className="text-gray-600">Лет успешной работы</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-medical-blue mb-2">24/7</div>
                  <div className="text-gray-600">Экстренная помощь</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <Card className="border-l-4 border-l-medical-blue border-t-0 border-r-0 border-b-0 shadow-sm">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Icon name="Award" className="text-medical-blue" size={24} />
                    <CardTitle className="text-lg">Высококвалифицированные специалисты</CardTitle>
                  </div>
                  <CardDescription>
                    Врачи высшей категории с многолетним опытом работы в ведущих медицинских центрах
                  </CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="border-l-4 border-l-medical-green border-t-0 border-r-0 border-b-0 shadow-sm">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Icon name="Microscope" className="text-medical-green" size={24} />
                    <CardTitle className="text-lg">Современное оборудование</CardTitle>
                  </div>
                  <CardDescription>
                    Используем передовые технологии диагностики и лечения от ведущих мировых производителей
                  </CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="border-l-4 border-l-medical-red border-t-0 border-r-0 border-b-0 shadow-sm">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Icon name="Users" className="text-medical-red" size={24} />
                    <CardTitle className="text-lg">Индивидуальный подход</CardTitle>
                  </div>
                  <CardDescription>
                    Персонализированные программы лечения и профилактики для каждого пациента
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Контакты
            </h2>
            <p className="text-xl text-gray-600">
              Свяжитесь с нами удобным для вас способом
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-medical-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" className="text-medical-blue" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Адрес клиники</h3>
                  <p className="text-gray-600">г. Москва, ул. Медицинская, д. 15</p>
                  <p className="text-gray-600">м. Здравоохранение</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-medical-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" className="text-medical-green" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Телефоны</h3>
                  <p className="text-gray-600">+7 (495) 123-45-67 — регистратура</p>
                  <p className="text-gray-600">+7 (495) 123-45-68 — экстренная помощь</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-medical-red/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" className="text-medical-red" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Режим работы</h3>
                  <p className="text-gray-600">Пн-Пт: 8:00 — 20:00</p>
                  <p className="text-gray-600">Сб-Вс: 9:00 — 18:00</p>
                  <p className="text-gray-600">Экстренная помощь: 24/7</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-600">info@medcenter.ru</p>
                  <p className="text-gray-600">emergency@medcenter.ru</p>
                </div>
              </div>
            </div>
            
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-xl">Обратная связь</CardTitle>
                <CardDescription>
                  Оставьте заявку и мы свяжемся с вами в ближайшее время
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Имя</Label>
                    <Input id="name" placeholder="Ваше имя" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" placeholder="+7 (___) ___-__-__" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <Label htmlFor="message">Сообщение</Label>
                  <Textarea id="message" placeholder="Опишите ваш вопрос или пожелание" />
                </div>
                <Button className="w-full bg-medical-blue hover:bg-blue-600 text-white">
                  <Icon name="Send" className="mr-2" size={16} />
                  Отправить сообщение
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Booking Dialog */}
      <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl text-center">Онлайн запись к врачу</DialogTitle>
            <DialogDescription className="text-center">
              Выберите удобную дату и время для посещения врача
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Выберите дату</h3>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="rounded-md border shadow-sm"
                disabled={(date) => date < new Date()}
              />
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Доступные врачи</h3>
                <div className="space-y-3">
                  {doctors.map((doctor, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer border border-gray-200 hover:border-medical-blue">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-semibold">{doctor.name}</p>
                            <p className="text-sm text-gray-600">{doctor.specialty}</p>
                          </div>
                          <div className="text-right">
                            <Badge variant="outline" className="border-medical-blue text-medical-blue">
                              {doctor.time}
                            </Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="patient-name">Имя пациента</Label>
                  <Input id="patient-name" placeholder="Введите ваше имя" />
                </div>
                <div>
                  <Label htmlFor="patient-phone">Телефон</Label>
                  <Input id="patient-phone" placeholder="+7 (___) ___-__-__" />
                </div>
                <div>
                  <Label htmlFor="patient-comment">Комментарий (необязательно)</Label>
                  <Textarea id="patient-comment" placeholder="Опишите жалобы или пожелания" />
                </div>
                
                <Button className="w-full bg-medical-blue hover:bg-blue-600 text-white" size="lg">
                  <Icon name="Calendar" className="mr-2" size={20} />
                  Записаться на приём
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Heart" className="text-medical-blue" size={32} />
                <span className="text-xl font-semibold">МедЦентр</span>
              </div>
              <p className="text-gray-400 mb-4">
                Современная медицина для вашего здоровья и благополучия
              </p>
              <div className="flex space-x-4">
                <Icon name="Facebook" className="text-gray-400 hover:text-white cursor-pointer" size={20} />
                <Icon name="Instagram" className="text-gray-400 hover:text-white cursor-pointer" size={20} />
                <Icon name="Twitter" className="text-gray-400 hover:text-white cursor-pointer" size={20} />
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Быстрые ссылки</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-white transition-colors">Главная</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Услуги</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">О клинике</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-gray-400">
                <p>г. Москва, ул. Медицинская, д. 15</p>
                <p>+7 (495) 123-45-67</p>
                <p>info@medcenter.ru</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 МедЦентр. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}