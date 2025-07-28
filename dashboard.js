
    function viewAppraisal() {
      const name = document.getElementById("viewName").value.trim();
      const id = document.getElementById("viewId").value.trim();

      const data = JSON.parse(localStorage.getItem("appraisalData"));

      if (data && data.employee.name === name && data.employee.id === id) {
  document.getElementById("result").innerHTML = `
    <div class="result-box">
     <h3 style="text-align:center">
  <i class="fas fa-trophy" style="color: #4b6cb7; margin-right: 10px; font-size:24px;"></i>
  Your Performance Appraisal
</h3>

      <div class="appraiser-box">
      <p><strong>Appraiser Name:</strong> ${data.appraiser.name}</p>
      <p><strong>Role:</strong> ${data.appraiser.designation}</p>
    </div>

      <div class="rating-row">
          <div style="height:100px; align-items:center;"><i class="fas fa-microchip" style="color: #4b6cb7;"></i><br>Technical: ${data.ratings.technical}/5</div>
          <div><i class="fas fa-comments" style="color: #00b894;"></i><br>Communication: ${data.ratings.communication}/5</div>
          <div><i class="fas fa-users" style="color: #fd7e14;"></i><br>Collaboration: ${data.ratings.collaboration}/5</div>
          <div><i class="fas fa-lightbulb" style="color: #fbc531;"></i><br>Problem Solving: ${data.ratings.problemSolving}/5</div>
          <div><i class="fas fa-clock" style="color: #6c5ce7;"></i><br>Time Management: ${data.ratings.timeManagement}/5</div>
        </div>

      <div class="comment-container">
      <div class="comment-block">
        <h4><i class="fas fa-thumbs-up" style="color:#27ae60;"></i> Strengths</h4>
        <p>${data.comments.strengths}</p>
      </div>

      <div class="comment-block">
        <h4><i class="fas fa-tools" style="color:#e67e22;"></i> Areas for Improvement</h4>
        <p>${data.comments.improvement}</p>
      </div>

      <div class="comment-block">
        <h4><i class="fas fa-bullseye" style="color:#c0392b;"></i> Career Goals</h4>
        <p>${data.comments.goals}</p>
      </div>

      <div class="comment-block">
        <h4><i class="fas fa-comment-dots" style="color:#2980b9;"></i> Additional Comments</h4>
        <p>${data.comments.additional}</p>
      </div>
    </div>
    </div>
  `;
}

    }
 