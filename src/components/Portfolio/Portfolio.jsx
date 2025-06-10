import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Code, Zap, ArrowRight, Copy, Check, Sparkles, Globe, Users, Coffee } from 'lucide-react';

const Portfolio = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [copiedItem, setCopiedItem] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [, setScrollY] = useState(0);

    useEffect(() => {
        setIsVisible(true);

        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleScroll = () => {
            setScrollY(window.scrollY);
        }; 

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const copyToClipboard = async (text, item) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopiedItem(item);
            setTimeout(() => setCopiedItem(null), 2000);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };

    const skills = [
        { name: 'React & Next.js', icon: '⚛️', description: 'Building scalable web applications', level: 95 },
        { name: 'TypeScript', icon: '🔷', description: 'Type-safe development', level: 90 },
        { name: 'Tailwind CSS', icon: '🎨', description: 'Modern styling solutions', level: 95 },
        { name: 'React Native', icon: '📱', description: 'Cross-platform mobile apps', level: 85 },
        { name: 'Redux', icon: '🔄', description: 'State management', level: 88 },
        { name: 'UI/UX Design', icon: '✨', description: 'Pixel-perfect implementations', level: 88 }
    ];

    const experience = [
        {
            title: 'Software Development Engineer 1 (Frontend)',
            company: 'GeoIQ',
            period: 'December 2023 - May 2025',
            year: '2023-2025',
            type: 'Full-time',
            color: 'from-blue-500 to-purple-600',
            highlights: [
                'Developed fast, scalable product code using Next.js, React.js, TypeScript, and React Query',
                'Built reusable components for in-house UI library, reducing development time by 15%',
                'Enhanced React, Next.js, Remix, and React Native applications with RESTful APIs',
                'Collaborated with cross-functional teams to implement user-centered solutions',
                'Conducted code reviews and maintained documentation for high code quality'
            ]
        },
        {
            title: 'Software Developer (Frontend)',
            company: 'ZenDynamix',
            period: 'March 2022 - November 2023',
            year: '2022-2023',
            type: 'Full-time',
            color: 'from-emerald-500 to-teal-600',
            highlights: [
                'Developed UI components using React and TypeScript',
                'Implemented state management with Redux and React Query',
                'Refactored legacy code for improved maintainability',
                'Migrated from MaterialUI to PrimeReact for better interface'
            ]
        }
    ];

    const stats = [
        { label: 'Years Experience', value: '3+', icon: Coffee },
        { label: 'Projects Completed', value: '10+', icon: Code },
        { label: 'Companies Worked', value: '2', icon: Users },
        { label: 'Code Commits', value: '1000+', icon: Github }
    ];

    const techStack = [
        {
            name: 'React',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
            color: 'from-blue-400 to-cyan-400'
        },
        {
            name: 'TypeScript',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
            color: 'from-blue-500 to-blue-600'
        },
        {
            name: 'JavaScript',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
            color: 'from-yellow-400 to-yellow-500'
        },
        {
            name: 'Next.js',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
            color: 'from-gray-700 to-gray-900'
        },
        {
            name: 'React Native',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
            color: 'from-blue-400 to-blue-600'
        },
        {
            name: 'Redux',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
            color: 'from-purple-400 to-purple-500'
        },
        {
            name: 'Tailwind CSS',
            icon: 'https://raw.githubusercontent.com/tailwindlabs/tailwindcss/master/.github/logo-light.svg',
            color: 'from-cyan-400 to-blue-500'
        },
        {
            name: 'HTML5',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
            color: 'from-orange-400 to-orange-500'
        },
        {
            name: 'CSS3',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
            color: 'from-blue-400 to-blue-500'
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden relative">
            {/* Animated Background Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"
                    style={{
                        left: mousePosition.x - 192,
                        top: mousePosition.y - 192,
                        transition: 'all 0.3s ease-out'
                    }}
                />
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-emerald-400/10 to-blue-600/10 rounded-full blur-2xl animate-bounce"
                    style={{ animationDuration: '6s' }} />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-400/10 to-orange-600/10 rounded-full blur-2xl animate-pulse"
                    style={{ animationDuration: '4s' }} />
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-xl border-b border-white/10">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                                <Code className="w-5 h-5" />
                            </div>
                            <span className="font-bold text-xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                Portfolio
                            </span>
                        </div>
                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#about" className="hover:text-blue-400 transition-colors duration-300">About</a>
                            <a href="#experience" className="hover:text-purple-400 transition-colors duration-300">Experience</a>
                            <a href="#skills" className="hover:text-emerald-400 transition-colors duration-300">Skills</a>
                            <a href="#projects" className="hover:text-pink-400 transition-colors duration-300">Projects</a>
                            <a href="#contact" className="hover:text-orange-400 transition-colors duration-300">Contact</a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center px-6 pt-20">
                <div className={`max-w-4xl mx-auto text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="flex flex-col items-center mb-8">
                        <div className="relative mb-4">
                            <img
                                src={require('../../assets/images/headshot.jpg')}
                                alt="Dastageer HC headshot"
                                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white/20 shadow-xl"
                                style={{
                                    filter: 'sepia(0.3)',
                                    background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255, 186, 115, 0.2) 100%)',
                                    boxShadow: '0 4px 32px 0 rgba(0,0,0,0.10), 0 0 0 8px rgba(255,255,255,0.10)'
                                }}
                            />
                            <div className="absolute inset-0 rounded-full pointer-events-none border-2 border-white/30" style={{ boxShadow: '0 0 0 6px rgba(255,255,255,0.10), 0 2px 16px 0 rgba(255,186,115,0.10)' }} />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-orange-200 via-white to-purple-200 bg-clip-text text-transparent mb-5 h-[5rem]">Dastageer HC</h1>
                        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full border border-blue-500/30 backdrop-blur-sm mb-6">
                            <Sparkles className="w-4 h-4 mr-2 text-blue-400" />
                            <span className="text-sm text-blue-300">Available for new opportunities</span>
                        </div>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent leading-tight">
                        Frontend Developer
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                        Crafting exceptional digital experiences with
                        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold"> React</span>,
                        <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent font-semibold"> Next.js</span>, and
                        <span className="bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent font-semibold"> TypeScript</span>
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                        <a
                            href="#contact"
                            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold text-white shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 transform hover:scale-105 transition-all duration-300"
                        >
                            <span className="relative z-10 flex items-center">
                                Let's Work Together
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </a>

                        <a
                            href="#projects"
                            className="px-8 py-4 border border-white/20 rounded-xl font-semibold text-white backdrop-blur-sm hover:bg-white/10 hover:border-white/30 transition-all duration-300"
                        >
                            View My Work
                        </a>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                                <div className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-gray-400">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                            About Me
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Passionate frontend developer with 3.5+ years of experience building fast, clean, and accessible web applications.
                            I specialize in React ecosystems and love turning complex designs into seamless user experiences.
                        </p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-2xl font-bold mb-6 text-white">My Journey</h3>
                                <p className="text-gray-300 mb-6 leading-relaxed">
                                    I'm a Frontend Developer with over 3.5 years of hands-on experience building fast, clean, and accessible web applications.
                                    My work spans early-stage startups and product teams, where I've taken ownership of React-based interfaces and contributed
                                    to the design-to-deployment cycle with autonomy and clarity.
                                </p>
                                <p className="text-gray-300 leading-relaxed">
                                    Based in India and working remote-first, I'm comfortable collaborating across time zones and prefer clarity,
                                    autonomy, and shipping solid frontend work. I believe in clean code, component architecture, and UX optimization.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-2xl border border-blue-500/20">
                                    <Globe className="w-8 h-8 text-blue-400" />
                                    <div>
                                        <h4 className="font-semibold text-white">Remote-First</h4>
                                        <p className="text-gray-400 text-sm">Comfortable working across time zones</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-emerald-500/10 to-teal-600/10 rounded-2xl border border-emerald-500/20">
                                    <Users className="w-8 h-8 text-emerald-400" />
                                    <div>
                                        <h4 className="font-semibold text-white">Team Player</h4>
                                        <p className="text-gray-400 text-sm">Agile environment experience</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-pink-500/10 to-orange-600/10 rounded-2xl border border-pink-500/20">
                                    <Zap className="w-8 h-8 text-pink-400" />
                                    <div>
                                        <h4 className="font-semibold text-white">Fast Delivery</h4>
                                        <p className="text-gray-400 text-sm">Quality code, shipped quickly</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                            Experience
                        </h2>
                        <p className="text-xl text-gray-300">
                            My professional journey building exceptional web experiences
                        </p>
                    </div>
                    <div className="space-y-8">
                        {experience.map((exp, index) => (
                            <div
                                key={index}
                                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500 transform hover:scale-[1.02]"
                            >
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                                        <div className="flex items-center space-x-4">
                                            <span className={`text-lg font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                                                {exp.company}
                                            </span>
                                            <span className="px-2 py-[.1rem] text-xs bg-gradient-to-r from-gray-600/20 to-gray-700/20 rounded-full text-gray-300 border border-gray-300">
                                                {exp.type}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="text-gray-400 font-medium">{exp.period}</div>
                                </div>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {exp.highlights.map((highlight, hIndex) => (
                                        <div
                                            key={hIndex}
                                            className="flex items-start space-x-3 p-4 bg-gradient-to-r from-white/5 to-transparent rounded-xl group-hover:from-white/10 transition-colors duration-300"
                                        >
                                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${exp.color} mt-2 flex-shrink-0`} />
                                            <span className="text-gray-300">{highlight}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                            Skills & Expertise
                        </h2>
                        <p className="text-xl text-gray-300">
                            Technologies I love working with
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-500 transform hover:scale-105"
                            >
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="text-3xl">{skill.icon}</div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{skill.name}</h3>
                                        <p className="text-gray-400 text-sm">{skill.description}</p>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <span className="text-sm text-gray-300">Proficiency</span>
                                        <span className="text-sm text-gray-300">{skill.level}%</span>
                                    </div>
                                    <div className="w-full bg-gray-700/50 rounded-full h-2">
                                        <div
                                            className="h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                                            style={{ width: `${skill.level}%` }}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack Section */}
            <section id="tech-stack" className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                            Tech Stack
                        </h2>
                        <p className="text-xl text-gray-300">
                            Technologies I work with daily
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {techStack.map((tech, index) => (
                            <div
                                key={index}
                                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-500 transform hover:scale-105"
                            >
                                <div className="flex flex-col items-center space-y-4">
                                    <div className="w-16 h-16 relative">
                                        <img
                                            src={tech.icon}
                                            alt={tech.name}
                                            className="w-full h-full object-contain"
                                            style={{
                                                filter: tech.name === 'React' || tech.name === 'React Native'
                                                    ? 'none'
                                                    : 'brightness-0 invert'
                                            }}
                                        />
                                    </div>
                                    <h3 className="text-lg font-semibold text-white">{tech.name}</h3>
                                </div>
                                <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                            Projects
                        </h2>
                        <p className="text-xl text-gray-300 mb-8">
                            Key projects I've worked on
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500">
                            <h3 className="text-2xl font-bold text-white mb-4">Retail IQ</h3>
                            <p className="text-gray-300 mb-6">
                                Developed Site Report feature for clear retail insights, migrated state logic to React Query for better performance, and optimized app load times.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-blue-500/10 text-blue-300 rounded-full text-sm">React</span>
                                <span className="px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full text-sm">TypeScript</span>
                                <span className="px-3 py-1 bg-green-500/10 text-green-300 rounded-full text-sm">React Query</span>
                            </div>
                        </div>

                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500">
                            <h3 className="text-2xl font-bold text-white mb-4">GeoIQ Web Kit</h3>
                            <p className="text-gray-300 mb-6">
                                Built reusable UI components library using Tailwind and ShadCN, ensuring consistency across projects and improving frontend efficiency.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-blue-500/10 text-blue-300 rounded-full text-sm">React</span>
                                <span className="px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full text-sm">TypeScript</span>
                                <span className="px-3 py-1 bg-cyan-500/10 text-cyan-300 rounded-full text-sm">Tailwind</span>
                            </div>
                        </div>

                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500">
                            <h3 className="text-2xl font-bold text-white mb-4">Retail IQ – MarketConnect</h3>
                            <p className="text-gray-300 mb-6">
                                Bootstrapped React Native app, built UI components, and implemented screens while maintaining visual consistency across the application.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-blue-500/10 text-blue-300 rounded-full text-sm">React Native</span>
                                <span className="px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full text-sm">TypeScript</span>
                                <span className="px-3 py-1 bg-green-500/10 text-green-300 rounded-full text-sm">Redux</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                            Let's Work Together
                        </h2>
                        <p className="text-xl text-gray-300">
                            Ready to bring your ideas to life? Let's create something amazing together.
                        </p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12">
                        <div className="grid md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
                                <p className="text-gray-300 mb-8 leading-relaxed">
                                    I'm always open to discussing new opportunities, interesting projects, or just having a chat about frontend development.
                                    Feel free to reach out!
                                </p>

                                <div className="space-y-4">
                                    <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-xl border border-blue-500/20">
                                        <Mail className="w-6 h-6 text-blue-400" />
                                        <div>
                                            <h4 className="font-semibold text-white">Email</h4>
                                            <p className="text-gray-400">dastageerhc@gmail.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-emerald-500/10 to-teal-600/10 rounded-xl border border-emerald-500/20">
                                        <Globe className="w-6 h-6 text-emerald-400" />
                                        <div>
                                            <h4 className="font-semibold text-white">Phone</h4>
                                            <p className="text-gray-400">+91 9980973613</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-white">Connect With Me</h3>

                                <div className="grid gap-4">
                                    <button
                                        onClick={() => copyToClipboard('https://github.com/dastageer-hc', 'github')}
                                        className="group flex items-center justify-between p-4 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:scale-105"
                                    >
                                        <div className="flex items-center space-x-4">
                                            <Github className="w-6 h-6 text-gray-300 group-hover:text-white" />
                                            <div className="text-left">
                                                <h4 className="font-semibold text-white">GitHub</h4>
                                                <p className="text-gray-400 text-sm">Check out my repositories</p>
                                            </div>
                                        </div>
                                        {copiedItem === 'github' ? (
                                            <Check className="w-5 h-5 text-green-400" />
                                        ) : (
                                            <Copy className="w-5 h-5 text-gray-400 group-hover:text-white" />
                                        )}
                                    </button>

                                    <button
                                        onClick={() => copyToClipboard('https://www.linkedin.com/in/dastageer-hc/', 'linkedin')}
                                        className="group flex items-center justify-between p-4 bg-gradient-to-r from-blue-800/30 to-blue-900/30 rounded-xl border border-blue-700/50 hover:border-blue-600/50 transition-all duration-300 hover:scale-105"
                                    >
                                        <div className="flex items-center space-x-4">
                                            <Linkedin className="w-6 h-6 text-blue-400 group-hover:text-blue-300" />
                                            <div className="text-left">
                                                <h4 className="font-semibold text-white">LinkedIn</h4>
                                                <p className="text-gray-400 text-sm">Let's connect professionally</p>
                                            </div>
                                        </div>
                                        {copiedItem === 'linkedin' ? (
                                            <Check className="w-5 h-5 text-green-400" />
                                        ) : (
                                            <Copy className="w-5 h-5 text-gray-400 group-hover:text-white" />
                                        )}
                                    </button>

                                    <div className="group flex items-center justify-between p-4 bg-gradient-to-r from-purple-800/30 to-purple-900/30 rounded-xl border border-purple-700/50 hover:border-purple-600/50 transition-all duration-300 hover:scale-105">
                                        <div className="flex items-center space-x-4">
                                            <Mail className="w-6 h-6 text-purple-400 group-hover:text-purpleF-300" />
                                            <div className="text-left">
                                                <h4 className="font-semibold text-white">Quick Response</h4>
                                                <p className="text-gray-400 text-sm">I typically respond within 24 hours</p>
                                            </div>
                                        </div>
                                        <Sparkles className="w-5 h-5 text-purple-400 group-hover:text-purple-300" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-6 border-t border-white/10">
                <div className="max-w-6xl mx-auto text-center">
                    <div className="flex items-center justify-center space-x-2 mb-6">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                            <Code className="w-5 h-5" />
                        </div>
                        <span className="font-bold text-xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Frontend Developer
                        </span>
                    </div>

                    <p className="text-gray-400 mb-6">
                        Crafting digital experiences with passion and precision
                    </p>

                    <div className="flex justify-center space-x-6">
                        <button
                            onClick={() => copyToClipboard('https://github.com/dastageer-hc', 'github')}
                            className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                        >
                            {copiedItem === 'github' ? (
                                <Check className="w-5 h-5 text-green-400" />
                            ) : (
                                <Github className="w-5 h-5 text-gray-400 group-hover:text-white" />
                            )}
                        </button>

                        <button
                            onClick={() => copyToClipboard('https://www.linkedin.com/in/dastageer-hc/', 'linkedin')}
                            className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                        >
                            {copiedItem === 'linkedin' ? (
                                <Check className="w-5 h-5 text-green-400" />
                            ) : (
                                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white" />
                            )}
                        </button>
                    </div>

                    <div className="mt-8 pt-8 border-t border-white/10">
                        <p className="text-gray-500 text-sm">
                            © 2024 Frontend Developer Portfolio. Built with React & Tailwind CSS.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Portfolio; 