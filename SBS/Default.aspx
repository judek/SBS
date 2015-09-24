<%@ Page Title="" Language="C#" MasterPageFile="SBS.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="SBS.Default" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="LeftSideBar" runat="server">
<img src="picts/mainpic.jpg" border="0" alt="image" class="borders" /><br />
<asp:Label ID="LabelLeftSideBar" runat="server" Text="LabelLeftSideBar"></asp:Label>
<a href="Taxservice.aspx">
<img src="picts/UncleSamCredit.jpg" alt="image" class="borders" /><br />
Check out our fast, accurate and inexpensive income tax service</a>
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
<asp:Label ID="LabelMain" runat="server" Text="LabelMain"></asp:Label>
</asp:Content>

