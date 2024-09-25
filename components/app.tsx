'use client'

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Book, Calendar, Music, Heart, BookOpen, Facebook, Chrome} from "lucide-react"
//import Image from "next/image"
import Link from "next/link"

// Componentes para cada sección
const Devotional = ({ author, country, message, date }) => (
  <Card className="mb-4">
    <CardHeader>
      <CardTitle>{author} - {country}</CardTitle>
    </CardHeader>
    <CardContent>
      <p>{message}</p>
      <p className="text-sm text-gray-500 mt-2">Publicado: {date}</p>
    </CardContent>
  </Card>
)

const Event = ({ title, description, dateTime, location, mapLink }) => (
  <Card className="mb-4">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p>{description}</p>
      <p className="mt-2"><Calendar className="inline mr-2" />{dateTime}</p>
      <p>{location}</p>
      <Link href={mapLink} className="text-blue-600 hover:underline mt-2 inline-block">
        Ver en Google Maps
      </Link>
    </CardContent>
  </Card>
)

const DailyVerse = ({ message, reference }) => (
  <Card className="mb-4">
    <CardContent className="text-center p-6">
      <p className="text-lg font-semibold mb-4">{message}</p>
      <p className="text-sm text-gray-600">{reference}</p>
    </CardContent>
  </Card>
)

const PrayerRequest = ({ message, name, country }) => (
  <Card className="mb-4">
    <CardContent>
      <p>{message}</p>
      <p className="text-sm text-gray-600 mt-2">Solicitado por: {name} - {country}</p>
    </CardContent>
  </Card>
)

const LoginScreen = ({ onLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica de autenticación real
    onLogin(email)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-blue-600">Devocionales Diarios</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin}>
            <div className="space-y-4">
              <Input
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                Iniciar sesión
              </Button>
            </div>
          </form>
          <div className="mt-4">
            <p className="text-center text-sm text-gray-600">O inicia sesión con</p>
            <div className="mt-3 flex justify-center space-x-4">
              <Button variant="outline" size="icon">
                <Chrome className="h-5 w-5 text-blue-600" />
              </Button>
              <Button variant="outline" size="icon">
                <Facebook className="h-5 w-5 text-blue-600" />
              </Button>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <p className="text-center text-sm text-gray-600 w-full">
            ¿Aún no tienes una cuenta?{""}
            <Link href="/register" className="font-medium text-blue-600 hover:underline">
              Regístrate
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}

const MainScreen = ({ onLogout }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [audio, setAudio] = useState(null)
  const [activeSection, setActiveSection] = useState("'home'")

  useEffect(() => {
    setAudio(new Audio('/peaceful-music.mp3'))
  }, [])

  const toggleMusic = () => {
    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
    setIsPlaying(!isPlaying)
  }

  const renderContent = () => {
    switch (activeSection) {
      case "'devotionals'":
        return (
          <ScrollArea className="h-[calc(100vh-280px)]">
            <Devotional
              author="Juan Pérez"
              country="México"
              message="Dios es nuestro amparo y fortaleza, pronto auxilio en las tribulaciones."
              date="2023-06-15"
            />
            <Devotional
              author="María González"
              country="España"
              message="El amor es paciente, bondadoso. no envidioso ni jactancioso orgulloso."
              date="2023-06-14"
            />
          </ScrollArea>
        )
      case "'events'":
        return (
          <ScrollArea className="h-[calc(100vh-280px)]">
            <Event
              title="Retiro Espiritual"
              description="Un fin de semana para renovar tu fe y conectar con Dios."
              dateTime="2023-07-15 09:00"
              location="Centro de Retiros El Paraíso"
              mapLink="https://goo.gl/maps/example"
            />
            <Event
              title="Estudio Bíblico"
              description="Profundiza en las escrituras con nuestro estudio semanal."
              dateTime="2023-06-20 19:00"
              location="Iglesia Central"
              mapLink="https://goo.gl/maps/example2"
            />
          </ScrollArea>
        )
      case "'verse'":
        return (
          <DailyVerse
            message="Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para todo aquel en él cree, no se pierda, mas tenga vida eterna."
            reference="Juan 3:16"
          />
        )
      case "'prayers'":
        return (
          <ScrollArea className="h-[calc(100vh-280px)]">
            <PrayerRequest
              message="Por favor, oren por la salud de mi madre."
              name="Carlos Rodríguez"
              country="Argentina"
            />
            <PrayerRequest
              message="Necesito sabiduría para tomar una decisión importante en mi trabajo."
              name="Ana López"
              country="Colombia"
            />
          </ScrollArea>
        )
      case "'home'":
        return(
          <ScrollArea className="h-[calc(100vh-280px)]">
            <Devotional
              author="Juan Pérez"
              country="México"
              message="Dios es nuestro amparo y fortaleza, pronto auxilio en las tribulaciones."
              date="2023-06-15"
            />
            <DailyVerse
              message="Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para todo aquel en él cree, no se pierda, mas tenga vida eterna."
              reference="Juan 3:16"
            />
            <Event
              title="Retiro Espiritual"
              description="Un fin de semana para renovar tu fe y conectar con Dios."
              dateTime="2023-07-15 09:00"
              location="Centro de Retiros El Paraíso"
              mapLink="https://goo.gl/maps/example"
            />
            <PrayerRequest
              message="Por favor, oren por la salud de mi madre."
              name="Carlos Rodríguez"
              country="Argentina"
            />
          </ScrollArea>

        )
      default:
        return "En construccion"
    }
  }

  const getCardTitle = (section) => {
    switch (section) {
      case "'home'":
        return "Inicio";
      case "'devotionals'":
        return "Devocional del Día";
      case "'events'":
        return "Eventos";
      case "'verse'":
        return "Versículo";
      case "'prayers'":
        return "Oraciones";
      case "'search'":
        return "Búsqueda";
      case "'menu'":
        return "Menú";
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 p-4 flex flex-col">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-blue-600">Devocionales Diarios</h1>
        <div className="flex items-center space-x-2">
          <Button onClick={toggleMusic} variant="outline" size="icon">
            <Music className={`h-4 w-4 ${isPlaying ? "'text-blue-600'" : "'text-gray-600'"}`} />
          </Button>
          <Button onClick={onLogout} variant="outline" size="sm">
            Cerrar sesión
          </Button>
        </div>
      </header>

      <Card className="mb-6 flex-grow">
        <CardHeader>
          <CardTitle>{getCardTitle(activeSection)}</CardTitle>
        </CardHeader>
        <CardContent>
          {renderContent()}
        </CardContent>
      </Card>

      <nav className="grid grid-cols-7 gap-2 p-2 bg-white border-t">
        <Button
          variant={activeSection === "'home'" ? 'default' : 'outline'}
          onClick={() => setActiveSection("'home'")}
          className="flex flex-col items-center py-2"
        >
          <Book className="h-5 w-5 mb-1" />
          <span className="text-xs">Inicio</span>
        </Button>
        <Button
          variant={activeSection === 'devotionals' ? 'default' : 'outline'}
          onClick={() => setActiveSection("'devotionals'")}
          className="flex flex-col items-center py-2"
        >
          <Book className="h-5 w-5 mb-1" />
          <span className="text-xs">Devocionales</span>
        </Button>
        <Button
          variant={activeSection === 'events' ? 'default' : 'outline'}
          onClick={() => setActiveSection("'events'")}
          className="flex flex-col items-center py-2"
        >
          <Calendar className="h-5 w-5 mb-1" />
          <span className="text-xs">Eventos</span>
        </Button>
        <Button
          variant={activeSection === 'verse' ? 'default' : 'outline'}
          onClick={() => setActiveSection("'verse'")}
          className="flex flex-col items-center py-2"
        >
          <BookOpen className="h-5 w-5 mb-1" />
          <span className="text-xs">Versículo</span>
        </Button>
        <Button
          variant={activeSection === 'prayers' ? 'default' : 'outline'}
          onClick={() => setActiveSection("'prayers'")}
          className="flex flex-col items-center py-2"
        >
          <Heart className="h-5 w-5 mb-1" />
          <span className="text-xs">Oraciones</span>
        </Button>
        <Button
          variant={activeSection === 'search' ? 'default' : 'outline'}
          onClick={() => setActiveSection("'search'")}
          className="flex flex-col items-center py-2"
        >
          <Heart className="h-5 w-5 mb-1" />
          <span className="text-xs">Busqueda</span>
        </Button>
        <Button
          variant={activeSection === 'menu' ? 'default' : 'outline'}
          onClick={() => setActiveSection("'menu'")}
          className="flex flex-col items-center py-2"
        >
          <Heart className="h-5 w-5 mb-1" />
          <span className="text-xs">Menu</span>
        </Button>
      </nav>
    </div>
  )
}

export function AppComponent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [user, setUser] = useState(null)

  const handleLogin = (email) => {
    setIsLoggedIn(true)
    setUser(email)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setUser(null)
  }

  return (
    <>
      {!isLoggedIn ? (
        <LoginScreen onLogin={handleLogin} />
      ) : (
        <MainScreen onLogout={handleLogout} />
      )}
    </>
  )
}