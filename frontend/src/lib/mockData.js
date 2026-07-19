export const mockCategories = [
  { _id: 'cat1', name: 'Single Origin', slug: 'single-origin', description: 'Cà phê đơn nguồn gốc chất lượng cao', type: 'product' },
  { _id: 'cat2', name: 'Espresso Blend', slug: 'espresso-blend', description: 'Hỗn hợp cà phê phối trộn cân bằng', type: 'product' },
  { _id: 'cat3', name: 'Tin tức & Chia sẻ', slug: 'tin-tuc-chia-se', description: 'Thông tin, kiến thức về cà phê specialty', type: 'post' },
];

export const mockProducts = [
  {
    _id: 'prod1',
    name: 'Ethiopia Yirgacheffe Kochere',
    slug: 'ethiopia-yirgacheffe-kochere',
    description: 'Hương hoa nhài tinh tế, vị chua sáng của chanh vàng, hậu ngọt trà đào thanh khiết. Lựa chọn tuyệt vời cho phương pháp pha Drip.',
    price: 350000,
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600',
    coffeeType: 'Arabica',
    roastLevel: 'Light',
    category: mockCategories[0],
    inStock: true,
    rating: 4.9,
    reviewsCount: 24,
  },
  {
    _id: 'prod2',
    name: 'Kenya Nyeri Peaberry',
    slug: 'kenya-nyeri-peaberry',
    description: 'Hương quả mọng đậm đà, lý chua đen ngọt lịm kèm hậu vị mật ong kéo dài. Phù hợp cho những ai thích vị chua trái cây phong phú.',
    price: 380000,
    image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=600',
    coffeeType: 'Arabica',
    roastLevel: 'Light',
    category: mockCategories[0],
    inStock: true,
    rating: 4.8,
    reviewsCount: 18,
  },
  {
    _id: 'prod3',
    name: 'Robusta Honey Gia Lai',
    slug: 'robusta-honey-gia-lai',
    description: 'Hạt Robusta sơ chế Honey chất lượng cao, đậm đà vị chocolate đắng ngọt dịu, hậu vị hạt dẻ rang và caramel béo ngậy. Thích hợp pha phin truyền thống.',
    price: 220000,
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=600',
    coffeeType: 'Robusta',
    roastLevel: 'Medium',
    category: mockCategories[0],
    inStock: true,
    rating: 4.7,
    reviewsCount: 32,
  },
  {
    _id: 'prod4',
    name: 'Premium House Blend No.1',
    slug: 'premium-house-blend-no1',
    description: 'Sự kết hợp hoàn hảo giữa Arabica Cầu Đất chua thanh và Robusta Honey Gia Lai đầm ấm. Cân bằng tuyệt đối cho tách Espresso hàng ngày.',
    price: 280000,
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=600',
    coffeeType: 'Blend',
    roastLevel: 'Medium',
    category: mockCategories[1],
    inStock: true,
    rating: 4.9,
    reviewsCount: 45,
  },
  {
    _id: 'prod5',
    name: 'Dark Roast Blend Espresso',
    slug: 'dark-roast-blend-espresso',
    description: 'Đặc trưng rang đậm cho gu cà phê mạnh mẽ. Hương vị sô-cô-la đen, hạt rang cháy nhẹ, hậu vị sâu lắng, hoàn hảo để pha Latte/Cappuccino béo ngậy.',
    price: 260000,
    image: 'https://images.unsplash.com/photo-1510972527409-cef1903972fa?auto=format&fit=crop&q=80&w=600',
    coffeeType: 'Blend',
    roastLevel: 'Dark',
    category: mockCategories[1],
    inStock: true,
    rating: 4.6,
    reviewsCount: 29,
  },
];

export const mockPosts = [
  {
    _id: 'post1',
    title: 'Nghệ Thuật Sơ Chế Cà Phê Specialty: Honey Process Là Gì?',
    slug: 'nghe-thuat-so-che-ca-phe-specialty-honey-process',
    excerpt: 'Phương pháp chế biến mật ong (Honey Process) mang lại vị ngọt đậm đà tự nhiên cho hạt cà phê. Cùng tìm hiểu sâu hơn về quy trình chế biến đặc trưng này.',
    content: `
      <h2>Phương pháp chế biến mật ong (Honey Process) là gì?</h2>
      <p>Honey Process không có nghĩa là sử dụng mật ong thật để tẩm ướp vào cà phê. Thay vào đó, tên gọi này xuất phát từ lớp nhầy ngọt và dính (mucilage) bao quanh hạt cà phê sau khi đã xát vỏ quả (pulping). Lớp nhầy này có lượng đường tự nhiên rất cao và khi khô lại, nó giống như một lớp mật ong bám quanh hạt thóc cà phê.</p>
      
      <h2>Hương vị đặc trưng của cà phê Honey Process</h2>
      <p>Cà phê chế biến mật ong thường mang các sắc thái hương vị trung hòa giữa chế biến ướt (Washed) và chế biến khô (Natural):</p>
      <ul>
        <li><strong>Độ chua:</strong> Chua thanh dịu, mượt mà hơn phương pháp Washed.</li>
        <li><strong>Body (thể chất):</strong> Dày dặn, đầm ấm hơn.</li>
        <li><strong>Độ ngọt:</strong> Cực kỳ cao và có hương vị phong phú của trái cây khô, mật ong và đường nâu.</li>
      </ul>
      
      <h2>Các cấp độ của Honey Process</h2>
      <p>Dựa trên lượng nhầy còn giữ lại trên hạt thóc và thời gian phơi, người ta chia làm 4 loại chính:</p>
      <ol>
        <li><strong>White Honey:</strong> Giữ lại ít lớp nhầy nhất (~10%), phơi khô nhanh. Vị sáng giống Washed.</li>
        <li><strong>Yellow Honey:</strong> Giữ lại khoảng ~20-50% lớp nhầy. Vị cân bằng, ngọt thanh.</li>
        <li><strong>Red Honey:</strong> Giữ lại gần như toàn bộ lớp nhầy (~80-90%). Phơi trong bóng râm lâu hơn. Vị hoa quả chín đậm đà.</li>
        <li><strong>Black Honey:</strong> Giữ trọn vẹn lớp nhầy, phơi khô rất chậm dưới mái che hạn chế ánh sáng. Quá trình lên men diễn ra mạnh mẽ nhất, cho ra hương vị phức tạp cực kỳ độc đáo.</li>
      </ol>
    `,
    coverImage: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80&w=800',
    author: 'Nguyễn Specialty',
    category: mockCategories[2],
    isPublished: true,
    createdAt: '2026-07-15T12:00:00Z',
  },
  {
    _id: 'post2',
    title: 'Cách Pha V60 Pour Over Đạt Chuẩn Hương Vị Tại Nhà',
    slug: 'cach-pha-v60-pour-over-dat-chuan-huong-vi',
    excerpt: 'Hướng dẫn từng bước giúp bạn tự pha chế một bình cà phê V60 Pour Over chuẩn vị specialty với tỷ lệ vàng và kỹ thuật rót nước nâng cao.',
    content: `
      <h2>Dụng cụ cần chuẩn bị</h2>
      <ul>
        <li>Phễu lọc Hario V60 (Nhựa, thủy tinh hoặc sứ).</li>
        <li>Giấy lọc Hario V60 tương ứng.</li>
        <li>Bình đựng cà phê thủy tinh (Server).</li>
        <li>Ấm rót nước chuyên dụng có vòi cổ ngỗng để kiểm soát dòng chảy.</li>
        <li>Cân điện tử tích hợp đếm thời gian (Scale & Timer).</li>
        <li>Nước sạch đun sôi ở nhiệt độ khoảng 90°C - 94°C.</li>
      </ul>
      
      <h2>Tỷ lệ pha vàng (Brewing Ratio)</h2>
      <p>Tỷ lệ phổ biến và dễ đạt cân bằng nhất cho cà phê Specialty là <strong>1:15</strong> (15g cà phê hạt xay ở mức thô vừa, tương ứng với 225g nước đầu ra).</p>
      
      <h2>Quy trình rót nước (Pouring Guide)</h2>
      <p>Rót nước làm 4 đợt chính:</p>
      <ol>
        <li><strong>Đợt 1 (Ủ cà phê - Blooming):</strong> Rót 40g nước nhiệt độ 92°C đều khắp bề mặt bột cà phê. Chờ 45 giây để khí CO2 thoát ra hoàn toàn. Đây là giai đoạn quan trọng nhất giúp tối ưu hóa quá trình chiết xuất.</li>
        <li><strong>Đợt 2:</strong> Rót tiếp 80g nước theo vòng tròn từ trong ra ngoài (tổng cộng trên cân là 120g). Rót chậm và đều tay.</li>
        <li><strong>Đợt 3:</strong> Rót thêm 60g nước (tổng cộng 180g) tập trung ở giữa để duy trì nhiệt độ ổn định.</li>
        <li><strong>Đợt 4:</strong> Rót nốt 45g nước cuối cùng (tổng cộng 225g) để hoàn thành bình cà phê.</li>
      </ol>
    `,
    coverImage: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&q=80&w=800',
    author: 'Trần PourOver',
    category: mockCategories[2],
    isPublished: true,
    createdAt: '2026-07-18T10:30:00Z',
  },
];
