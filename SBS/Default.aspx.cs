using System;
using System.Collections.Generic;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace SBS
{
    public partial class Default : SBSPage
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            LabelMain.Text = GetContent("Body");
            LabelLeftSideBar.Text = GetContent("LeftSideBar");
        }
    }
}
