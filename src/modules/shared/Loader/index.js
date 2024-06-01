const Spinner = () => {
  return (
    <div class="h-screen flex items-center justify-center z-50">
      <div class="flex items-center justify-center z-50">
        <div class="h-[130px] w-[130px] mx-auto" role="status">
          {/* <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span> */}
          <img src="/images/loader2.gif" alt="loader" />
        </div>
      </div>
    </div>
  );
};

export default Spinner;
