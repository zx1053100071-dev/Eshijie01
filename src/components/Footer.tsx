/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MapPin, Phone, MessageSquare, Mail, CornerRightDown, Heart, Sparkles } from 'lucide-react';
import { contactDetails } from '../data';

export default function Footer() {
  return (
    <footer
      id="contact-section"
      className="py-20 md:py-24 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300 border-t border-gray-100 dark:border-gray-900"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 xl:px-12">
        
        {/* ================= Contact Content & Interactive Blocks ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-16 items-start mb-20">
          
          {/* Left Block: Text, Contact detail lines */}
          <div className="lg:col-span-4 flex flex-col justify-start text-left">
            <span className="font-mono text-xs font-bold tracking-[0.25em] text-indigo-500 uppercase mb-4">
              BUSINESS CONNECTIONS
            </span>
            <h3 className="font-sans font-black text-3xl text-gray-950 dark:text-white mb-6 tracking-tight">
              与我们共创未来
            </h3>
            <p className="font-sans text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
              益世界设计中心期待与全球优秀研发商、品牌方及视觉艺术家达成深度共赢合作。若有相关设计业务咨询或加入我们的团队，请通过以下方式联系。
            </p>

            {/* Direct Information row */}
            <div className="space-y-5" id="contact-lines">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-gray-50 dark:bg-gray-950 border border-gray-100/50 dark:border-gray-800 text-indigo-500 shrink-0">
                  <MapPin size={16} />
                </div>
                <div>
                  <span className="block text-[10px] font-mono font-bold text-gray-400 tracking-wider uppercase mb-0.5">
                    工作地址
                  </span>
                  <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                    {contactDetails.address}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-gray-50 dark:bg-gray-950 border border-gray-100/50 dark:border-gray-800 text-purple-500 shrink-0">
                  <Phone size={16} />
                </div>
                <div>
                  <span className="block text-[10px] font-mono font-bold text-gray-400 tracking-wider uppercase mb-0.5">
                    联系电话
                  </span>
                  <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-mono">
                    {contactDetails.phone}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-gray-50 dark:bg-gray-950 border border-gray-100/50 dark:border-gray-800 text-blue-500 shrink-0">
                  <MessageSquare size={16} />
                </div>
                <div>
                  <span className="block text-[10px] font-mono font-bold text-gray-400 tracking-wider uppercase mb-0.5">
                    微信公众号
                  </span>
                  <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                    {contactDetails.wechat}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-gray-50 dark:bg-gray-950 border border-gray-100/50 dark:border-gray-800 text-pink-500 shrink-0">
                  <Mail size={16} />
                </div>
                <div>
                  <span className="block text-[10px] font-mono font-bold text-gray-400 tracking-wider uppercase mb-0.5">
                    招聘与商务邮箱
                  </span>
                  <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-mono">
                    {contactDetails.email}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Center Block: High-end interactive SVG QR Code */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center p-8 bg-gray-50 dark:bg-gray-900/30 rounded-2xl border border-gray-100 dark:border-gray-900/60 shadow-sm relative overflow-hidden group">
            <span className="font-mono text-[9px] font-bold tracking-[0.25em] text-gray-400 dark:text-gray-500 uppercase mb-6 flex items-center gap-1">
              <CornerRightDown size={10} className="text-indigo-400" /> WECHAT OFFICIAL QR CODE
            </span>
            
            {/* Interactive QR Code Frame */}
            <div className="relative p-6 bg-white dark:bg-gray-950 rounded-xl border border-gray-100 dark:border-gray-900/40 shadow-sm transition-transform duration-300 group-hover:scale-102 flex flex-col items-center">
              
              {/* Elegant mockup vector QR Code representing the company's address */}
              <svg viewBox="0 0 100 100" className="w-36 h-36 text-gray-900 dark:text-white" fill="currentColor">
                {/* 3 corner finder patterns */}
                <rect x="0" y="0" width="25" height="25" rx="2" fill="currentColor" />
                <rect x="4" y="4" width="17" height="17" rx="1" fill="white" className="dark:fill-gray-950" />
                <rect x="8" y="8" width="9" height="9" rx="0.5" fill="currentColor" />

                <rect x="75" y="0" width="25" height="25" rx="2" fill="currentColor" />
                <rect x="79" y="4" width="17" height="17" rx="1" fill="white" className="dark:fill-gray-950" />
                <rect x="83" y="8" width="9" height="9" rx="0.5" fill="currentColor" />

                <rect x="0" y="75" width="25" height="25" rx="2" fill="currentColor" />
                <rect x="4" y="79" width="17" height="17" rx="1" fill="white" className="dark:fill-gray-950" />
                <rect x="8" y="83" width="9" height="9" rx="0.5" fill="currentColor" />

                {/* Simulated randomized QR blocks pattern in blue purple palette */}
                <g fill="currentColor" className="opacity-90">
                  <rect x="35" y="5" width="5" height="10" />
                  <rect x="45" y="0" width="10" height="5" />
                  <rect x="60" y="10" width="5" height="5" />
                  <rect x="65" y="5" width="5" height="5" />
                  
                  <rect x="30" y="30" width="15" height="5" />
                  <rect x="35" y="40" width="5" height="5" />
                  <rect x="45" y="35" width="10" height="10" />
                  <rect x="60" y="30" width="5" height="10" />
                  
                  <rect x="5" y="35" width="5" height="15" />
                  <rect x="15" y="45" width="10" height="5" />
                  <rect x="0" y="55" width="5" height="5" />
                  
                  <rect x="75" y="35" width="10" height="5" fill="#4f46e5" />
                  <rect x="90" y="45" width="10" height="5" />
                  <rect x="85" y="55" width="5" height="10" />
                  
                  <rect x="30" y="60" width="10" height="5" />
                  <rect x="45" y="65" width="15" height="5" fill="#a855f7" />
                  <rect x="55" y="55" width="5" height="10" />
                  <rect x="65" y="65" width="10" height="10" />
                  
                  <rect x="35" y="80" width="10" height="10" />
                  <rect x="50" y="85" width="5" height="15" />
                  <rect x="60" y="80" width="10" height="5" fill="#3b82f6" />
                  <rect x="65" y="90" width="5" height="5" />
                  
                  <rect x="80" y="80" width="15" height="5" />
                  <rect x="85" y="90" width="10" height="10" />
                </g>

                {/* Central branded icon dot */}
                <rect x="40" y="40" width="20" height="20" rx="4" fill="#6366f1" />
                <rect x="42" y="42" width="16" height="16" rx="2" fill="white" className="dark:fill-gray-950" />
                {/* Text "益" or symbol */}
                <text x="50" y="54" fontSize="11" fontWeight="bold" fill="#6366f1" textAnchor="middle" fontFamily="sans-serif">益</text>
              </svg>

              <span className="font-sans font-semibold text-xs text-gray-700 dark:text-gray-300 mt-4">
                扫一扫 关注我们
              </span>
            </div>

            <p className="mt-4 font-sans text-[11px] text-gray-400 dark:text-gray-500 text-center uppercase tracking-wider">
              扫码订阅 益世界最新设计资讯
            </p>
          </div>

          {/* Right Block: Company Office/Building High Quality photo */}
          <div className="lg:col-span-4 flex flex-col justify-start relative rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-900 h-[280px] md:h-[320px] lg:h-[352px] group">
            {/* High-quality corporate image background */}
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80"
              alt="益世界大楼"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103 pointer-events-none select-none"
            />
            {/* Luxury overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10 pointer-events-none select-none" />
            
            {/* Small text indicator overlay */}
            <div className="absolute bottom-6 left-6 right-6 text-white text-left select-none pointer-events-none">
              <span className="text-[10px] font-mono tracking-widest text-[#a855f7] font-bold block mb-1 uppercase">
                COMMUNITY OUTLOOK
              </span>
              <h4 className="font-sans font-bold text-base md:text-lg leading-snug">
                益世界智慧创作大厅
              </h4>
              <p className="font-sans text-xs text-gray-300 mt-1 opacity-90 leading-normal">
                广州天河区科韵路高新技术开发基地。百人视觉大师在此集结。
              </p>
            </div>
          </div>
          
        </div>

        {/* ================= Bottom copyright footer ================= */}
        <div className="pt-8 border-t border-gray-100 dark:border-gray-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-400 dark:text-gray-500">
          <div className="flex items-center gap-1">
            <span>© 2026 益世界网络科技有限公司. All Rights Reserved.</span>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="hover:text-indigo-500 transition-colors cursor-default">
              设计中心主管策划
            </span>
            <span className="text-gray-200 dark:text-gray-800">|</span>
            <span className="hover:text-indigo-500 transition-colors cursor-default">
              极简排版美学
            </span>
            <span className="text-gray-200 dark:text-gray-800">|</span>
            <div className="flex items-center gap-1 p-1 px-2 rounded-md bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-900/60 text-[10px]">
              <Heart size={9} className="text-pink-500 fill-pink-500" />
              <span>益世界・创意无限</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
