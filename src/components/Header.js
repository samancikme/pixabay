const Header = () => {
    const type = localStorage.getItem("type")
    return `
    <div class="flex-1"> 
          <h1 class="text-[30px] font-bold">PIXABAY</h1>
    </div>

        <form class="relative md:flex-[2] w-[100%] flex justify-center items-center ">
          <input id="input" required class="py-2 px-10 w-[100%] font-normal text-[16px] rounded-full outline-none bg-[#ffffff8e]  backdrop-blur-lg" type="text" placeholder="Search for photos">
          <button class="absolute top-0 bottom-0 right-[15px] text-[28px]" type="submit">
            <i class='bx bx-search-alt'></i>
          </button>
        </form>

    <div class="flex-1 flex justify-center items-center gap-1">
          <label class="font-bold text-black" for="filter">Select type</label>
          <select class="py-1 px-1 rounded-lg outline-none    bg-[#ffffff5d] font-semibold backdrop-blur-lg" name="filter" id="filter">
          <option value="photo">Photo</option>
          <option value="video">Videos</option>
          </select>
    </div>
    `
}

export default Header