import Catalog from './pages/catalog/catalog'
import Home from './pages/index'
import LogInPage from './pages/log-in-page';
import SignUpPage from './pages/sign-up-page';
import AriesPage from './pages/zodiac-pages/aries-page';
import TaurusPage from './pages/zodiac-pages/taurus-page';
import GeminiPage from './pages/zodiac-pages/gemini-page';
import CancerPage from './pages/zodiac-pages/cancer-page';
import LeoPage from './pages/zodiac-pages/leo-page';
import VirgoPage from './pages/zodiac-pages/virgo-page';
import LibraPage from './pages/zodiac-pages/libra-page';
import ScorpioPage from './pages/zodiac-pages/scorpio-page';
import SagittariusPage from './pages/zodiac-pages/sagittarius-page';
import CapricornPage from './pages/zodiac-pages/capricorn-page';
import AquariusPage from './pages/zodiac-pages/aquarius-page';
import PiscesPage from './pages/zodiac-pages/pisces-page';
import CatalogPage from './pages/catalog/catalog'
import CertificatePage from './pages/catalog/certificate-page'
import CreatorsPage from './pages/creators/index'

export const publicRoutes = [
    {
        path: '/',
        Component: Home
    },
    {
        path: '/login',
        Component: LogInPage
    },
    {
        path: '/signup',
        Component: SignUpPage
    },
    {
        path: '/aries',
        Component: AriesPage
    },
    {
        path: '/taurus',
        Component: TaurusPage
    },
    {
        path: '/gemini',
        Component: GeminiPage
    },
    {
        path: '/cancer',
        Component: CancerPage
    },
    {
        path: '/leo',
        Component: LeoPage
    },
    {
        path: '/virgo',
        Component: VirgoPage
    },
    {
        path: '/libra',
        Component: LibraPage
    },
    {
        path: '/scorpio',
        Component: ScorpioPage
    },
    {
        path: '/sagittarius',
        Component: SagittariusPage
    },
    {
        path: '/capricorn',
        Component: CapricornPage
    },
    {
        path: '/aquarius',
        Component: AquariusPage
    },
    {
        path: '/pisces',
        Component: PiscesPage
    },
    {
        path: '/catalog',
        Component: CatalogPage
    },
    {
        path: '/creators',
        Component: CreatorsPage
    },
    {
        path: '/catalog/certificate' + '/:id',
        Component: CertificatePage
    }
]