import Image from 'next/image';

export const metadata = {
  title: 'Giới Thiệu - Specialty Coffee Space',
  description: 'Tìm hiểu về câu chuyện, triết lý và quy trình tuyển chọn, rang xay hạt cà phê đặc sản tại Specialty Coffee Space.',
  alternates: {
    canonical: '/gioi-thieu',
  },
};

export default function AboutPage() {
  return (
    <div className="bg-stone-950 min-h-screen py-16 text-stone-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-16">
        {/* Banner/Header */}
        <div className="text-center space-y-4">
          <span className="text-xs text-amber-500 font-bold uppercase tracking-widest bg-amber-700/10 px-4 py-1.5 rounded-full border border-amber-700/20">
            Our Story
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-black text-stone-100 mt-2">Giới Thiệu Về Chúng Tôi</h1>
          <p className="text-stone-400 max-w-xl mx-auto mt-2 leading-relaxed">
            Hành trình kết nối những người yêu cà phê với hương vị thuần khiết và trọn vẹn nhất của hạt cà phê đặc sản.
          </p>
        </div>

        {/* Narrative Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-100">Triết Lý Cà Phê Bản Nguyên</h2>
            <p className="leading-relaxed text-sm">
              Tại Specialty Coffee Space, chúng tôi tin rằng mỗi hạt cà phê đều mang trong mình một câu chuyện độc bản về vùng đất nơi nó sinh trưởng. Sự khác biệt về độ cao, lượng mưa, dưỡng chất trong đất và bàn tay chăm sóc của người nông dân tạo nên các nốt hương phong phú từ hoa quả, thảo mộc đến chocolate.
            </p>
            <p className="leading-relaxed text-sm">
              Mục tiêu của chúng tôi là tôn trọng tối đa tính bản địa của hạt cà phê bằng việc áp dụng các kỹ thuật rang hiện đại, giúp giải phóng hoàn hảo các sắc hương tự nhiên mà không làm mất đi tính nguyên bản.
            </p>
          </div>
          <div className="relative aspect-square w-full rounded-2xl overflow-hidden border border-stone-850 shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80&w=600"
              alt="Rang xay cà phê"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Brand Values */}
        <div className="bg-stone-900/40 border border-stone-850 p-8 rounded-3xl space-y-8">
          <h3 className="text-2xl font-serif font-bold text-stone-100 text-center">Giá Trị Cốt Lõi</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="text-center space-y-3">
              <div className="text-amber-500 font-serif text-3xl font-black">01</div>
              <h4 className="font-bold text-stone-200 text-base">Tuyển Chọn Kỹ Lưỡng</h4>
              <p className="text-stone-400 text-xs leading-relaxed">
                Chỉ sử dụng hạt cà phê đạt điểm thử nếm (Cupping Score) từ 80 điểm trở lên theo chuẩn SCA.
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="text-amber-500 font-serif text-3xl font-black">02</div>
              <h4 className="font-bold text-stone-200 text-base">Rang Xay Thủ Công</h4>
              <p className="text-stone-400 text-xs leading-relaxed">
                Mỗi mẻ rang được kiểm soát hồ sơ nhiệt độ tỉ mỉ để tối ưu hóa hương vị đặc trưng.
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="text-amber-500 font-serif text-3xl font-black">03</div>
              <h4 className="font-bold text-stone-200 text-base">Phát Triển Bền Vững</h4>
              <p className="text-stone-400 text-xs leading-relaxed">
                Hợp tác trực tiếp và tôn vinh công sức của các nông hộ tại Việt Nam và trên thế giới.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
