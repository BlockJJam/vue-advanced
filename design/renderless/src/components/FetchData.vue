<script>
import axios from 'axios';

export default {
  props: ['url'],
  data() {
    return {
      response: null,
      loading: true,
    };
  },
  created() {
    axios
      .get(this.url)
      .then((response) => {
        this.response = response.data;
        this.loading = false;
      })
      .catch((error) => {
        alert('[ERROR] fetching the data', error);
        console.log(error);
      });
  },
  /**
   * render func
   * - Vue의 scopedSlots($scopedSlots): 컴포넌트를 그리는 것이지만, 데이터를 넘겨주기만 하는 녀석
   * - scopedSlot 내부 설정이 어디로? => 상위 컴포넌트로 노출
   */
  render() {
    return this.$scopedSlots.default({
      response: this.response,
      loading: this.loading,
    });
  },
};
</script>
