'use client'

import Image from 'next/image'
import { useState } from 'react'

// Icons
import TaskWallet from '@/icons/TaskWallet'
import TaskPaws from '@/icons/TaskPaws'
import TaskTwitter from '@/icons/TaskTwitter'
import TaskTelegram from '@/icons/TaskTelegram'
import TaskInvite from '@/icons/TaskInvite'

// Images
import { taskBlum, taskWhitePaws } from '@/images'

type Task = {
    icon: string | React.FC<{ className?: string }>
    title: string
    reward: string
}

const TasksTab = () => {
    const [activeTab, setActiveTab] = useState<'in-game' | 'partners'>('in-game')

    const tasks: Task[] = [
        {
            icon: taskWhitePaws.src,
            title: 'Put 🐾 in your name',
            reward: '+ 5,000 PAWS'
        },
        {
            icon: TaskPaws,
            title: 'Tweet about PAWS',
            reward: '+ 2,000 PAWS'
        },
        {
            icon: TaskTelegram,
            title: 'Follow channel',
            reward: '+ 1,000 PAWS'
        },
        {
            icon: TaskTwitter,
            title: 'Follow twitter',
            reward: '+ 2,000 PAWS'
        },
        {
            icon: TaskInvite,
            title: 'Invite 10 friends',
            reward: '+ 5,000 PAWS'
        },
        {
            icon: TaskPaws,
            title: 'Watch video (every 10 min)',
            reward: '+ 100 PAWS'
        },
        {
            icon: TaskWallet,
            title: 'Connect wallet',
            reward: '+ 3,000 PAWS'
        }
    ]

    const partnerTasks: Task[] = [
        {
            icon: taskBlum.src,
            title: 'Join Blum Channel',
            reward: '+ 1,000 PAWS'
        }
    ]

    // ===== Monetag logic =====
    const COOLDOWN_TIME = 10 * 60 * 1000 // 10 minutes

    const showAd = (taskTitle: string) => {
        if (taskTitle !== 'Watch video (every 10 min)') return

        const lastTime = localStorage.getItem('lastAdTime')
        const now = Date.now()

        if (lastTime && now - Number(lastTime) < COOLDOWN_TIME) {
            alert('⏳ انتظر 10 دقائق قبل مشاهدة إعلان جديد')
            return
        }

        // @ts-ignore
        if (window.show_10404224) {
            // @ts-ignore
            window.show_10404224()
            localStorage.setItem('lastAdTime', now.toString())
            alert('🎉 ربحت 100 PAWS')
        } else {
            alert('❌ الإعلان غير جاهز')
        }
    }

    return (
        <div className="quests-tab-con px-4 transition-all duration-300">
            {/* Header */}
            <div className="pt-8">
                <h1 className="text-3xl font-bold mb-2">TASKS</h1>
                <div>
                    <span className="text-xl font-semibold">GET REWARDS </span>
                    <span className="text-xl text-gray-500">FOR</span>
                </div>
                <div className="text-xl text-gray-500">COMPLETING QUESTS</div>
            </div>

            {/* Tabs */}
            <div className="flex gap-0 mt-6">
                <button
                    onClick={() => setActiveTab('in-game')}
                    className={`flex-1 py-2 px-4 rounded-lg ${
                        activeTab === 'in-game'
                            ? 'bg-white text-black'
                            : 'bg-[#151515] text-white'
                    }`}
                >
                    In-game
                </button>

                <button
                    onClick={() => setActiveTab('partners')}
                    className={`flex-1 py-2 px-4 rounded-lg ${
                        activeTab === 'partners'
                            ? 'bg-white text-black'
                            : 'bg-[#151515] text-white'
                    }`}
                >
                    Partners
                </button>
            </div>

            {/* Tasks list */}
            <div className="mt-4 mb-20 bg-[#151516] rounded-xl">
                {(activeTab === 'in-game' ? tasks : partnerTasks).map(
                    (task, index) => (
                        <div key={index} className="flex items-center">
                            <div className="w-[72px] flex justify-center">
                                <div className="w-10 h-10">
                                    {typeof task.icon === 'string' ? (
                                        <Image
                                            src={task.icon}
                                            alt={task.title}
                                            width={40}
                                            height={40}
                                        />
                                    ) : (
                                        <task.icon />
                                    )}
                                </div>
                            </div>

                            <div className="flex items-center justify-between w-full py-4 pr-4 border-t border-[#222622]">
                                <div>
                                    <div className="text-[17px]">
                                        {task.title}
                                    </div>
                                    <div className="text-gray-400 text-sm">
                                        {task.reward}
                                    </div>
                                </div>

                                <button
                                    onClick={() => showAd(task.title)}
                                    className="h-8 bg-white text-black px-4 rounded-full text-sm font-medium"
                                >
                                    Start
                                </button>
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    )
}

export default TasksTab
