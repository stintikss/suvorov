import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu } from '../ui/menu';

const ChangeItem = ({ emoji, title, changes }: { emoji: string; title: string; changes: string[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.li
      className="bg-white/5 p-3 rounded-lg border border-white/10"
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-start gap-3">
        <span className="text-xl">{emoji}</span>
        <div className="flex-1">
          <div 
            onClick={() => setIsOpen(!isOpen)} 
            className="flex justify-between items-center cursor-pointer"
          >
            <h4 className="font-medium text-white">{title}</h4>
            <motion.span
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
              className="text-white/60"
            >
              ▶
            </motion.span>
          </div>
          
          <AnimatePresence>
            {isOpen && (
              <motion.ul
                className="mt-2 space-y-1.5"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
              >
                {changes.map((change, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-white/80">
                    <span className="text-green-400">→</span>
                    <span>{change}</span>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.li>
  );
};

const Beta = () => {
  const [activeTab, setActiveTab] = useState<'future' | 'changes'>('future');
  const [isExpanded, setIsExpanded] = useState(false);

  const futureUpdates = [
    { emoji: '📱', title: 'Исправить ошибки в адаптивности', description: 'Полная версия для смартфонов, телефонов, планшетов и телевизоров' },
    { emoji: '🇺🇸', title: 'Смена языка', description: 'Смена языка на 10 различных стран' },
    { emoji: '🔗', title: 'Интеграции', description: 'Подключение внешних сервисов' },
    { emoji: '⚙️', title: 'Добавление настроек', description: 'Добавление настроек с полезным функционалом' },
    { emoji: '🛠️', title: 'Код', description: 'Исправление и оптимизация кода' },
  ];

  const recentChanges = [
    { 
      emoji: '📦', 
      title: 'Блок "Проекты"', 
      changes: [
        'Добавлен фильтр поиск проектов',
      ]
    }
  ];

  return (
    <>
        <Menu bg=''/>
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col">
        <div className="flex-1 flex items-center justify-center p-4">
            <motion.div 
            className="w-full max-w-md bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100, damping: 10 }}
            >
            <div className="flex justify-between items-start mb-4">
                <motion.h3 className="text-2xl font-bold text-white">
                🚀 Бета-версия
                </motion.h3>
                <span className="text-xs px-2.5 py-1 bg-blue-500/20 text-blue-200 rounded-full border border-blue-400/30">
                v1.0
                </span>
            </div>

            <motion.div
                className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                <p className="text-white/90 text-sm">
                <span className="font-semibold">💡 Не беспокойтесь о ошибках!</span> Это тестовая версия, 
                и мы активно работаем над улучшениями. Ваши отзывы помогают нам стать лучше!
                </p>
            </motion.div>

            <div className="flex mb-4 border-b border-white/10">
                <button
                className={`py-2 px-4 font-medium text-sm ${activeTab === 'future' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-white/60'}`}
                onClick={() => setActiveTab('future')}
                >
                Будущие обновления
                </button>
                <button
                className={`py-2 px-4 font-medium text-sm ${activeTab === 'changes' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-white/60'}`}
                onClick={() => setActiveTab('changes')}
                >
                Последние изменения
                </button>
            </div>

            <div className="mb-4">
                {activeTab === 'future' ? (
                <ul className="space-y-3">
                    {futureUpdates.map((item, index) => (
                    <motion.li
                        key={index}
                        className="bg-white/5 p-3 rounded-lg border border-white/10"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                    >
                        <div className="flex items-start gap-3">
                        <span className="text-xl">{item.emoji}</span>
                        <div>
                            <h4 className="font-medium text-white">{item.title}</h4>
                            <p className="text-white/70 text-sm mt-1">{item.description}</p>
                        </div>
                        </div>
                    </motion.li>
                    ))}
                </ul>
                ) : (
                <ul className="space-y-3">
                    {recentChanges.map((item, index) => (
                    <ChangeItem key={index} {...item} />
                    ))}
                </ul>
                )}
            </div>

            <motion.button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full py-2.5 bg-blue-600/80 hover:bg-blue-600 text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
            >
                <motion.span
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                >
                ▼
                </motion.span>
                <span>{isExpanded ? 'Скрыть технические детали' : 'Показать технические детали'}</span>
            </motion.button>

            <AnimatePresence>
                {isExpanded && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden mt-2"
                >
                    <div className="p-3 bg-black/20 rounded-lg border border-white/10 text-sm">
                    <h4 className="font-medium text-white mb-2">Технические подробности:</h4>
                    <ul className="space-y-2 text-white/70">
                        <li className="flex items-start gap-2">
                        <span className="text-yellow-400">•</span>
                        <span>Версия API: Coming soon</span>
                        </li>
                        <li className="flex items-start gap-2">
                        <span className="text-yellow-400">•</span>
                        <span>Последнее обновление: 25.06.2023</span>
                        </li>
                    </ul>
                    </div>
                </motion.div>
                )}
            </AnimatePresence>
            </motion.div>
        </div>
        </div>
    </>
  );
};

export default Beta;
